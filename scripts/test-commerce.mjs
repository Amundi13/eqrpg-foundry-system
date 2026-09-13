globalThis.game={user:{id:'gm',isGM:true},users:[{id:'gm',isGM:true,active:true}]};
import assert from 'node:assert/strict';
import {coinsToCopper,copperToCoins,purchaseItem,pendingPurchase,resumePurchase,cancelPurchase} from '../module/helpers/commerce.mjs';
let sequence=0;
globalThis.foundry={utils:{randomID:()=>String(++sequence).padStart(16,'0')}};
const stock={name:'Rope',type:'equipment',system:{price:1,quantity:1},flags:{eqrpg:{sourceId:'source'}}};
function buyer() {
  return {type:'character',isOwner:true,uuid:`Actor.${++sequence}`,system:{wealth:{gold:10}},flags:{},items:new Map(),writes:0,creates:0,
    async update(patch) {
      this.writes++;
      if(this.beforeUpdate) await this.beforeUpdate(patch);
      for(const [key,value] of Object.entries(patch)) {
        if(key==='flags.eqrpg.purchase') {this.flags.eqrpg??={};this.flags.eqrpg.purchase=structuredClone(value);}
        else if(!this.skipCoins) this.system.wealth[key.split('.').at(-1)]=value;
      }
      return this;
    },
    async createEmbeddedDocuments(type,items,options) {
      assert.equal(type,'Item');assert.equal(options.keepId,true);
      assert.equal(this.flags.eqrpg.purchase.state,'paid');
      assert.equal(coinsToCopper(this.system.wealth),this.flags.eqrpg.purchase.afterCopper);
      this.creates++;
      if(this.createHook) return this.createHook(items);
      for(const item of items) this.items.set(item._id,structuredClone(item));
      return items;
    }
  };
}
assert.deepEqual(copperToCoins(1234),{platinum:1,gold:2,silver:3,copper:4});
assert.equal(coinsToCopper(copperToCoins(1234)),1234);
assert.throws(()=>coinsToCopper({gold:-1}));
{
 const a=buyer();await purchaseItem(a,stock,3);assert.equal(coinsToCopper(a.system.wealth),700);assert.equal(a.items.size,1);assert.equal([...a.items.values()][0].system.quantity,3);assert.equal([...a.items.values()][0].flags.eqrpg.sourceId,'source');assert.equal(pendingPurchase(a),null);await assert.rejects(resumePurchase(a));
}
for(const change of [a=>a.isOwner=false,a=>a.system.wealth.gold=0]) {
 const a=buyer();change(a);await assert.rejects(purchaseItem(a,stock,1));assert.equal(a.writes,0);assert.equal(a.items.size,0);
}
{
 const a=buyer();await assert.rejects(purchaseItem(a,stock,0));assert.equal(a.writes,0);
 a.skipCoins=true;await assert.rejects(purchaseItem(a,stock,1),/Payment/);assert.equal(a.creates,0);assert.equal(pendingPurchase(a).state,'charging');
}
{
 const a=buyer();a.createHook=async()=>[];await assert.rejects(purchaseItem(a,stock,1),/cancelled/);assert.equal(pendingPurchase(a).attempted,'');await cancelPurchase(a);assert.equal(coinsToCopper(a.system.wealth),1000);assert.equal(pendingPurchase(a),null);
}
{
 const a=buyer();a.createHook=async(items)=>{for(const item of items)a.items.set(item._id,item);throw Error('connection lost');};
 await assert.rejects(purchaseItem(a,stock,1),/connection lost/);await resumePurchase(a);assert.equal(a.creates,1);assert.equal(a.items.size,1);assert.equal(coinsToCopper(a.system.wealth),900);
}
{
 const a=buyer();a.createHook=async()=>{throw Error('unknown');};await assert.rejects(purchaseItem(a,stock,1));await assert.rejects(resumePurchase(a),/earlier delivery/);await assert.rejects(cancelPurchase(a),/Delivery has started/);assert.equal(a.creates,1);
}
{
 const a=buyer();a.createHook=async(items)=>{if(a.creates===2)return [];for(const item of items)a.items.set(item._id,item);return items;};
 await assert.rejects(purchaseItem(a,{...stock,type:'weapon'},3));assert.equal(a.items.size,1);await resumePurchase(a);assert.equal(a.items.size,3);assert.equal(coinsToCopper(a.system.wealth),700);
}
{
 const a=buyer();a.createHook=async()=>[];await assert.rejects(purchaseItem(a,stock,1));a.system.wealth.copper=1;await assert.rejects(cancelPurchase(a),/balance changed/);assert.equal(coinsToCopper(a.system.wealth),901);
}
{
 const a=buyer();a.createHook=async()=>[];await assert.rejects(purchaseItem(a,stock,1));a.skipCoins=true;await assert.rejects(cancelPurchase(a),/Refund was not confirmed/);assert.equal(pendingPurchase(a).state,'refunding');await assert.rejects(resumePurchase(a),/no second refund/);a.skipCoins=false;a.system.wealth=copperToCoins(1000);await resumePurchase(a);assert.equal(pendingPurchase(a),null);
}
{
 const a=buyer();let release;const gate=new Promise(resolve=>release=resolve);a.beforeUpdate=()=>gate;const first=purchaseItem(a,stock,1);await assert.rejects(purchaseItem(a,stock,1),/already being processed/);release();await first;assert.equal(a.items.size,1);
}
{
 const a=buyer();a.beforeUpdate=patch=>{if(patch['flags.eqrpg.purchase'].delivered.length)throw Error('receipt unavailable');};await assert.rejects(purchaseItem(a,stock,1));a.beforeUpdate=null;await resumePurchase(a);assert.equal(a.items.size,1);assert.equal(a.creates,1);
}
console.log('Commerce tests passed: payment confirmation, ownership, concurrency, interrupted delivery, partial orders, refunds and recovery.');
