import {isPrimaryGM} from '../helpers/gm-authority.mjs';
export const ACTOR_MIGRATION_VERSION=1;
const copy=value=>structuredClone(value);
const stable=value=>JSON.stringify(value,(_,v)=>v && typeof v==='object' && !Array.isArray(v) ? Object.fromEntries(Object.keys(v).sort().map(k=>[k,v[k]])) : v);
const get=(value,path)=>path.split('.').reduce((v,k)=>v?.[k],value);
export function planActorMigration(source) {
  const version=source.flags?.eqrpg?.actorMigrationVersion??0;
  if(version>ACTOR_MIGRATION_VERSION || !Number.isInteger(version) || version<0) return {id:source._id,status:'blocked',reason:'Unknown migration version'};
  if(version===ACTOR_MIGRATION_VERSION) return {id:source._id,status:'current',patch:{}};
  if(!['character','npc','pet'].includes(source.type)) return {id:source._id,status:'blocked',reason:'Unsupported actor type'};
  const patch={'flags.eqrpg.actorMigrationVersion':ACTOR_MIGRATION_VERSION};
  const review=[];
  if(source.type==='character') {
    if(source.system?.hpAdvancement===undefined) patch['system.hpAdvancement']=[];
    if(source.system?.training===undefined) patch['system.training']={openingLevel:0,openingPoints:0,note:'',entries:[]};
    if(source.flags?.eqrpg?.creationEligible===undefined) patch['flags.eqrpg.creationEligible']=false;
    review.push('Historical training, HP rolls and multiclass history are not inferred.');
  }
  return {id:source._id,name:source.name,status:'ready',expected:copy(source),patch,review};
}
export function previewActorMigrations(actors=game.actors) {
  return [...actors].map(actor=>planActorMigration(actor.toObject()));
}
let applying=false;
export async function applyActorMigrations(plans,actors=game.actors) {
  if(!isPrimaryGM()) throw new Error('Only the elected active GM can apply actor migrations.');
  if(applying) throw new Error('Actor migration is already running in this client.');
  applying=true;
  const completed=[];
  try {
    if(!Array.isArray(plans) || new Set(plans.map(p=>p.id)).size!==plans.length) throw new Error('Invalid or duplicate actor migration plan.');
    for(const plan of plans) {
      if(!isPrimaryGM()) throw new Error('GM authority changed during actor migration.');
      if(plan.status==='current') continue;
      if(plan.status!=='ready') throw new Error(`Blocked actor migration: ${plan.id}`);
      const actor=actors.get(plan.id);
      if(!actor || !actor.isOwner || stable(actor.toObject())!==stable(plan.expected)) throw new Error(`Stale or inaccessible actor: ${plan.id}`);
      const fresh=planActorMigration(actor.toObject());
      if(stable(fresh.patch)!==stable(plan.patch)) throw new Error(`Modified migration patch refused: ${plan.id}`);
      await actor.update(copy(fresh.patch));
      const actual=actor.toObject();
      for(const [path,value] of Object.entries(fresh.patch)) if(stable(get(actual,path))!==stable(value)) throw new Error(`Migration update not confirmed: ${plan.id}`);
      completed.push(plan.id);
    }
    return {completed};
  } catch(cause) {
    const error=new Error(`Actor migration stopped after ${completed.length} confirmed actors: ${cause.message}`,{cause});
    error.completed=completed;throw error;
  } finally {applying=false;}
}
