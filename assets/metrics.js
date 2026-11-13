// Pure, browser-independent training calculations. Used by the app and Node regression tests.
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.TrainingMetrics=api})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
function validSet(s){return !!s&&typeof s.exercise==='string'&&s.exercise.trim().length>0&&Number.isFinite(s.weight)&&s.weight>=0&&Number.isInteger(s.reps)&&s.reps>0&&Number.isFinite(s.rpe)&&s.rpe>=1&&s.rpe<=10}
function volume(sets){return sets.reduce((sum,s)=>sum+s.weight*s.reps,0)}
function lastSet(sessions,exercise){return sessions.slice().sort((a,b)=>b.date.localeCompare(a.date)).flatMap(s=>s.sets.filter(x=>x.exercise===exercise).slice().reverse())[0]||null}
function byDate(sessions,exercise,metric){return sessions.map(s=>({date:s.date,sets:s.sets.filter(x=>x.exercise===exercise)})).filter(s=>s.sets.length).sort((a,b)=>a.date.localeCompare(b.date)).map(s=>({x:s.date,y:metric==='maxWeight'?Math.max(...s.sets.map(x=>x.weight)):metric==='volume'?volume(s.sets):metric==='reps'?s.sets.reduce((n,x)=>n+x.reps,0):metric==='sets'?s.sets.length:Math.max(0,...s.sets.filter(x=>x.reps<=12).map(x=>x.weight*(1+x.reps/30)))}))}
function pointPosition(date,start,end){const first=Date.parse(start+'T12:00:00'),last=Date.parse(end+'T12:00:00'),at=Date.parse(date+'T12:00:00');return last===first?0.5:(at-first)/(last-first)}
function goalMet(sessions,exercise,weight,reps){return sessions.some(s=>s.sets.some(x=>x.exercise===exercise&&x.weight>=weight&&x.reps>=reps))}
return {validSet,volume,lastSet,byDate,pointPosition,goalMet};
});