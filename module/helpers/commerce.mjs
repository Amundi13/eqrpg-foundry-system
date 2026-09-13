import { isPrimaryGM } from "./gm-authority.mjs";
const coinValues = {platinum:1000,gold:100,silver:10,copper:1};
const busyBuyers = new Set();
const clone = value => structuredClone(value);

export function coinsToCopper(wealth = {}) {
  let total=0;
  for(const [coin,value] of Object.entries(coinValues)) {
    const count=Number(wealth[coin] ?? 0);
    if(!Number.isSafeInteger(count) || count<0) throw new Error("Coin balances must be nonnegative whole numbers.");
    total+=count*value;
  }
  if(!Number.isSafeInteger(total)) throw new Error("Coin balance is too large.");
  return total;
}

export function copperToCoins(total) {
  if(!Number.isSafeInteger(total) || total<0) throw new Error("Invalid copper amount.");
  let remaining=total;
  return Object.fromEntries(Object.entries(coinValues).map(([coin,value])=>{
    const count=Math.floor(remaining/value);remaining%=value;return [coin,count];
  }));
}

export function priceToCopper(price) {
  const amount=Number(price);
  const copper=Math.round(amount*100);
  if(!Number.isFinite(amount) || amount<0 || !Number.isSafeInteger(copper)) throw new Error("This item has an invalid price.");
  return copper;
}

export function pendingPurchase(actor) {
  const receipt=actor?.flags?.eqrpg?.purchase;
  return receipt && !["complete","cancelled"].includes(receipt.state) ? receipt : null;
}

async function locked(actor, operation) {
  if (!isPrimaryGM()) throw new Error("Store transactions must be processed by the elected GM.");
  if(actor?.type!=="character" || !actor.isOwner) throw new Error("Select a character you own to make purchases.");
  const key=actor.uuid ?? actor.id ?? actor;
  if(busyBuyers.has(key)) throw new Error("A purchase is already being processed for this character.");
  busyBuyers.add(key);
  try { return await operation(); } finally { busyBuyers.delete(key); }
}

function walletPatch(total) {
  return Object.fromEntries(Object.entries(copperToCoins(total)).map(([key,value])=>[`system.wealth.${key}`,value]));
}

async function saveReceipt(actor, receipt, extra = {}) {
  if (!isPrimaryGM()) throw new Error("GM authority changed. Review the pending purchase before continuing.");
  await actor.update({...extra,"flags.eqrpg.purchase":clone(receipt)});
  const actual=actor.flags?.eqrpg?.purchase;
  if(actual?.id!==receipt.id || actual.state!==receipt.state || JSON.stringify(actual.delivered)!==JSON.stringify(receipt.delivered) || actual.attempted!==receipt.attempted) {
    throw new Error("Purchase update was not confirmed. Reopen the store and review the pending purchase before retrying.");
  }
}

function requireReceipt(actor) {
  const receipt=pendingPurchase(actor);
  if(!receipt || receipt.version!==1 || !Array.isArray(receipt.items) || !Array.isArray(receipt.delivered)) throw new Error("No supported pending purchase was found.");
  return clone(receipt);
}

async function deliver(actor, receipt) {
  if(receipt.state==="charging") {
    if(coinsToCopper(actor.system.wealth)!==receipt.afterCopper) throw new Error("Payment could not be confirmed. Ask the GM to review this purchase receipt and coin balance.");
    receipt.state="paid";await saveReceipt(actor,receipt);
  }
  if(receipt.state!=="paid") throw new Error("This purchase needs review before delivery can continue.");
  for(const item of receipt.items) {
    if(receipt.delivered.includes(item._id)) continue;
    let existing=actor.items.get(item._id);
    if(existing && existing.flags?.eqrpg?.purchaseId!==receipt.id) throw new Error("A purchase item ID is occupied by another item. Ask the GM to review the receipt.");
    if(!existing) {
      if(receipt.attempted===item._id) throw new Error("An earlier delivery attempt was not confirmed. Do not purchase again; ask the GM to inspect the receipt and inventory.");
      receipt.attempted=item._id;await saveReceipt(actor,receipt);
      if (!isPrimaryGM()) throw new Error("GM authority changed. Review pending delivery before continuing.");
      const created=await actor.createEmbeddedDocuments("Item",[clone(item)],{keepId:true});
      existing=actor.items.get(item._id);
      if(!existing && created?.length===0) {
        receipt.attempted="";await saveReceipt(actor,receipt);
        throw new Error("Item creation was cancelled. Resume the purchase or cancel it for a refund.");
      }
      if(!existing || existing.flags?.eqrpg?.purchaseId!==receipt.id) throw new Error("Delivery was not confirmed. Reopen the store to review this pending purchase.");
    }
    receipt.delivered.push(item._id);receipt.attempted="";
    await saveReceipt(actor,receipt);
  }
  receipt.state="complete";await saveReceipt(actor,receipt);
  return receipt;
}

export async function purchaseItem(actor, stockItem, quantity) {
  return locked(actor,async()=>{
    if(pendingPurchase(actor)) throw new Error("Finish or cancel this character's pending purchase first.");
    if(!Number.isInteger(quantity) || quantity<1 || quantity>99) throw new Error("Purchase quantity must be between 1 and 99.");
    if(!["weapon","armor","equipment","consumable"].includes(stockItem?.type)) throw new Error("Unsupported store item.");
    const costCopper=priceToCopper(stockItem.system?.price)*quantity;
    const beforeCopper=coinsToCopper(actor.system.wealth);
    if(!Number.isSafeInteger(costCopper) || beforeCopper<costCopper) throw new Error("This character does not have enough money for the purchase.");
    const id=foundry.utils.randomID();
    const base=clone(stockItem);
    for(const key of ["_id","_storeId","_stats","folder","ownership"]) delete base[key];
    base.flags ??= {};base.flags.eqrpg ??= {};base.flags.eqrpg.purchaseId=id;
    const stackable=["equipment","consumable"].includes(base.type);
    if(stackable) base.system.quantity=quantity;
    const items=Array.from({length:stackable?1:quantity},()=>({...clone(base),_id:foundry.utils.randomID()}));
    if(new Set(items.map(item=>item._id)).size!==items.length || items.some(item=>actor.items.get(item._id))) throw new Error("Could not allocate distinct purchase item IDs.");
    const receipt={version:1,id,state:"charging",name:base.name,quantity,costCopper,beforeCopper,afterCopper:beforeCopper-costCopper,items,delivered:[],attempted:""};
    await saveReceipt(actor,receipt,walletPatch(receipt.afterCopper));
    return deliver(actor,receipt);
  });
}

export async function resumePurchase(actor) {
  return locked(actor,()=>{
    const receipt=requireReceipt(actor);
    return receipt.state==="refunding" ? refund(actor,receipt) : deliver(actor,receipt);
  });
}

async function refund(actor, receipt) {
  if(receipt.delivered.length || receipt.attempted || receipt.items.some(item=>actor.items.get(item._id))) throw new Error("Delivery has started. Resume the purchase or ask the GM to review it; no automatic refund was made.");
  if(receipt.state!=="refunding") {
    if(coinsToCopper(actor.system.wealth)!==receipt.afterCopper) throw new Error("The coin balance changed after payment. Ask the GM to review the refund; no balance was overwritten.");
    receipt.state="refunding";
    await saveReceipt(actor,receipt,walletPatch(receipt.beforeCopper));
  }
  // An uncertain refund is never issued twice. Recovery only confirms its result.
  if(coinsToCopper(actor.system.wealth)!==receipt.beforeCopper) throw new Error("Refund was not confirmed. Ask the GM to review the receipt; no second refund was issued.");
  receipt.state="cancelled";
  await saveReceipt(actor,receipt);
  return receipt;
}

export async function cancelPurchase(actor) {
  return locked(actor,()=>refund(actor,requireReceipt(actor)));
}
