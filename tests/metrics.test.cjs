const test=require('node:test');const assert=require('node:assert/strict');const m=require('../assets/metrics.js');
const sessions=[{date:'2026-01-01',sets:[{exercise:'Squat',weight:40,reps:10,rpe:7}]},{date:'2026-01-10',sets:[{exercise:'Squat',weight:50,reps:8,rpe:8},{exercise:'Squat',weight:45,reps:10,rpe:8}]}];
test('valid sets require finite nonnegative loads and bounded effort',()=>{assert.equal(m.validSet(sessions[0].sets[0]),true);assert.equal(m.validSet({...sessions[0].sets[0],weight:NaN}),false);assert.equal(m.validSet({...sessions[0].sets[0],rpe:11}),false)});
test('volume is load multiplied by reps',()=>assert.equal(m.volume(sessions[1].sets),850));
test('repeat last set selects last matching set in latest session',()=>assert.equal(m.lastSet(sessions,'Squat').weight,45));
test('history is chronological regardless of input order',()=>assert.deepEqual(m.byDate(sessions.slice().reverse(),'Squat','maxWeight').map(x=>x.y),[40,50]));
test('chart positions reflect elapsed time',()=>{const x=m.pointPosition('2026-01-02','2026-01-01','2026-01-11');assert.ok(x>0.09&&x<0.11);assert.equal(m.pointPosition('2026-01-01','2026-01-01','2026-01-01'),0.5)});
test('goals require both load and reps in one set',()=>{assert.equal(m.goalMet(sessions,'Squat',50,10),false);assert.equal(m.goalMet(sessions,'Squat',45,10),true)});
