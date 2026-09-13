// Parse only unambiguous durations. Conditional, random and concentration durations need GM adjudication.
export function spellEffectTiming(text, casterLevel, clock={}) {
  const value=String(text??'').trim().toLowerCase().replace(/\s*\(d\)\s*$/,'');
  if(value==='permanent') return {duration:{value:null,units:'seconds',expiry:null,expired:false},manual:false};
  const match=value.match(/^(\d+)\s*(round|second|minute|hour|day)s?(?:\s*\/\s*(\d+\s*)?levels?)?$/);
  if(!match) return {manual:true,reason:'Duration requires review: '+text};
  const perLevel=value.includes('/');
  if(perLevel && (!Number.isInteger(casterLevel) || casterLevel<1)) return {manual:true,reason:'Caster level requires review'};
  const amount=Number(match[1])*(perLevel?Math.floor(casterLevel/Number(match[3]??1)):1);
  if(!Number.isFinite(amount) || amount<=0) return {manual:true,reason:'Duration requires review: '+text};
  const units=match[2]+'s';
  const start={time:clock.time??0,combat:clock.combat??null,round:clock.round??null,turn:clock.turn??null,combatant:clock.combatant??null,initiative:clock.initiative??null};
  if(clock.generation===13) {
    const seconds=amount*({rounds:6,seconds:1,minutes:60,hours:3600,days:86400}[units]);
    return {duration:units==='rounds' && clock.combat ? {rounds:amount,startRound:start.round,startTurn:start.turn,combat:start.combat} : {seconds,startTime:start.time},manual:false};
  }
  return {duration:{value:amount,units,expiry:null,expired:false},start,manual:false};
}
