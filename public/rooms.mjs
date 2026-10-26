import {newDetective,detectiveAction,detectiveHTML} from './detective.mjs';
import {newEmbedding,embeddingAction,embeddingHTML} from './embedding.mjs';
import {newCodebook,codeAction,codeHTML} from './codebook.mjs';
export const vectors={homework:[0.8,0.2,0.5],basketball:[0.1,0.9,0.4],school:[0.7,0.6,0.3]};
export const points=[['homework',15,20,0],['classroom',25,30,0],['teacher',35,18,0],['basketball',65,20,1],['soccer',80,30,1],['team',70,42,1],['sandwich',25,70,2],['lunch',40,80,2],['snack',15,85,2]];
export const missing=['teacher','soccer','snack'];
export const rounds=[{words:'Maya put the sandwich in her backpack because she was late.'.split(' '),target:8,answer:[0],question:'Which word tells us who ‘she’ refers to?',feedback:'‘She’ refers to Maya. Connecting these words helps us understand the sentence.'},{words:'I sat beside the bank and watched the river.'.split(' '),target:4,answer:[8],question:'Which word is the strongest clue to the meaning of ‘bank’ here?',feedback:'‘River’ suggests that ‘bank’ means the land beside a river.'},{words:'I visited the bank to deposit money.'.split(' '),target:3,answer:[5,6],question:'Select the TWO strongest clues to the meaning of ‘bank’ here.',feedback:'‘Deposit’ and ‘money’ suggest a place that provides financial services.'}];
const shuffle=a=>a.map(x=>({x,r:Math.random()})).sort((a,b)=>a.r-b.r).map(x=>x.x);
export function initialRooms(){return {current:0,vector:newCodebook(),embedding:newEmbedding(),attention:newDetective()};}
export function unlockedRooms(token,data){return [true,!!token,data.vector.done,data.embedding.done,data.attention.done,false,false];}
export function updateRoom(data,op,value,target){if(op.startsWith('detective:')){detectiveAction(data.attention,op.slice(10),value,target);return;}if(op.startsWith('embed:')){embeddingAction(data.embedding,op.slice(6),value);return;}if(['input','book','encode','message','candidate','vault','hint'].includes(op)){codeAction(data.vector,op,value,target);}
else if(op==='embedding'){if(!missing.includes(value)||!missing.includes(target)||data.embedding.matched.includes(value)||data.embedding.matched.includes(target))return;data.embedding.feedback=value===target?'':'Look at the nearby words and try another spot.';if(value===target)data.embedding.matched.push(value);}
else if(op==='neighbor'){if(points.some(p=>p[0]===value))data.embedding.neighbor=value;}
else if(op==='word'){const a=data.attention;if(a.correct||a.done)return;const i=Number(value);if(!rounds[a.round].words[i]||i===rounds[a.round].target)return;a.selected=a.selected.includes(i)?a.selected.filter(x=>x!==i):[...a.selected,i];a.feedback='';}
else if(op==='connections'){const a=data.attention;if(a.correct||a.done)return;const r=rounds[a.round];a.correct=a.selected.length===r.answer.length&&r.answer.every(i=>a.selected.includes(i));a.feedback=a.correct?r.feedback:'Look for words that help explain the highlighted word';}
else if(op==='next'){const a=data.attention;if(!a.correct||a.done)return;if(a.round===2)a.done=true;else{a.round++;a.selected=[];a.correct=false;a.feedback='';}}}
export function roomHTML(index,data,selected){const card=(label,kind)=>`<button class="card ${selected===label?'selected':''}" draggable="true" data-label="${label}" data-kind="${kind}">${label}</button>`;const btn=(label,n)=>`<button data-room="${n}">${label}</button>`;let h='';
if(index===1)return codeHTML(data.vector,selected);
if(index===2)return embeddingHTML(data.embedding);
if(index===3)return detectiveHTML(data.attention);
return `<section class="panel">${h}</section>`;}
