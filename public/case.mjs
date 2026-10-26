import {setupReflection,reflectionAction} from './reflection.mjs';
import {setupTraining,trainingAction} from './training-experiment.mjs';
import {preparePrediction,predictionAction} from './prediction.mjs';
import {prepareAttention,qkvAction} from './attention-panel.mjs';
import {setupMap,mapAction} from './evidence-map.mjs';
import {setupVault,vaultAction} from './vault.mjs';
export const report='The mouse beside the keyboard stopped working.';
export const tokens=['The','mouse','be','side','the','key','board','stop','ped','work','ing','.'];
export const codebook={the:[5,5],mouse:[5,6],beside:[4,5],be:[4,5],side:[4,4],key:[2,8],board:[2,7],keyboard:[2,8],stop:[6,4],ped:[6,3],working:[3,7],work:[3,7],ing:[3,6],'.':[9,1]};
export const missing=['mouse','keyboard','working'];
export const references={computer:[1,8],screen:[2,9],functioning:[3,8],animal:[8,5],cage:[9,5]};
export const records=[report,'I clicked the mouse to open the file.','The wireless mouse needs a new battery.','The mouse beside the cage stopped eating.','The small mouse nibbled a seed.','The mouse ran into its nest.'];
export const roomNames=['Token Town','Vector Vault','Embedding Explorer','Attention Arena','Next-Word Nexus','Training Library','Reflection Room'];
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function deal(){const order=shuffle(tokens.map((_,i)=>i)),prefilled=order.slice(tokens.length/2);return {order,student:order.slice(0,tokens.length/2),prefilled,board:tokens.map((_,i)=>prefilled.includes(i)?i:null),revealed:[],hints:3,failed:false};}
export function fresh(){return {version:4,page:'title',current:0,complete:[],navigationHistory:[],entrySeen:[],dismissed:[],evidence:{},token:deal(),vector:{order:shuffle([0,1,2,3,4,5]),slots:[null,null,null],locked:[]},map:{placed:[],selected:null,location:null,inspect:null},attention:{points:[0,0,0],interpretation:null},prediction:[],training:{order:shuffle(records.map((_,i)=>i)),sorted:[]},reflection:{choice:null,reason:''},feedback:''};}
export function isOpen(s,i){return i===0||s.complete.includes(i-1);}
function finish(s,i){if(!s.complete.includes(i))s.complete.push(i);s.page='transition';s.feedback='';}
export function options(s){return s.prediction.length===0?[['connection',60],['battery',40]]:s.prediction.length===1?[['first',70],['carefully',30]]:[['.',90],['!',10]];}
export function response(s){return 'Check the mouse'+s.prediction.map(t=>/[.!]/.test(t)?t:' '+t).join('');}
export const vectorCards=[[5,6],[2,8],[3,7],[6,5],[8,2],[7,3]];
export function act(s,op,v,t){s.feedback='';const i=s.current;if(op==='room'){const n=Number(v);if(isOpen(s,n)){s.entrySeen??=[...s.complete];const visited=s.entrySeen.includes(n);s.current=n;if(!visited){s.entrySeen.push(n);s.page='entry';}else s.page=s.complete.includes(n)&&n!==5?'transition':'activity';}return;}if(op==='enter'){s.page='intro';return;}if(op==='start'){s.page='activity';return;}if(op==='dismiss'){s.dismissed.push(`${s.page}-${i}`);return;}if(i===6&&op==='edit'){setupReflection(s);reflectionAction(s,op,v,t);return;}if(s.page!=='activity'||s.complete.includes(i)&&i!==5&&i!==6)return;
if(i===0){const g=s.token;if(op==='retry'){s.token=deal();return;}if(g.failed)return;if(op==='hint'&&g.hints){const ids=g.prefilled.filter(id=>!g.revealed.includes(id));g.revealed.push(ids[Math.floor(Math.random()*ids.length)]);g.hints--;}
if(op==='move'){const id=Number(v),slot=Number(t);if(!g.student.includes(id)||!Number.isInteger(slot)||slot<0||slot>=tokens.length||g.board[slot]!==null&&g.board[slot]!==id)return;g.board=g.board.map(x=>x===id?null:x);g.board[slot]=id;}
if(op==='check'&&g.board.every(x=>x!==null)){if(g.board.every((id,j)=>tokens[id].toLowerCase()===tokens[j].toLowerCase())){s.evidence.report=report;s.evidence.tokens=g.board.map(id=>tokens[id]);finish(s,0);}else{g.failed=true;s.feedback='Not quite. Recheck the report and retry the same sentence.';}}}
if(i===1){setupVault(s);vaultAction(s,op==='vector'?'move':op==='check'?'test':op,v,t);return;}
if(i===2){setupMap(s);mapAction(s,op,v,t);return;}
if(i===3){prepareAttention(s);const g=s.attention;if(op.startsWith('qkv:')){qkvAction(s,op.slice(4),v,t);return;}if(!g.qkv.ready)return;if(op==='point'){const j=Number(v),d=Number(t);if(j>=0&&j<3&&[1,-1].includes(d)&&g.points[j]+d>=0&&g.points.reduce((a,b)=>a+b,0)+d<=10)g.points[j]+=d;}if(op==='interpret')g.interpretation=v;if(op==='check'){if(g.points.reduce((a,b)=>a+b,0)!==10)s.feedback='Use all 10 teaching points before you check.';else if(g.points[0]<3||g.points[1]<3)s.feedback='Both “keyboard” and “stopped working” help explain this report. Give each at least 3 points.';else if(g.interpretation!=='Computer device')s.feedback='Look at “keyboard” and “stopped working.” Which meaning of “mouse” fits both clues?';else{s.evidence.attention={points:[...g.points],interpretation:g.interpretation,conclusion:'This report most likely describes a computer mouse.'};finish(s,3);}}}
if(i===4){preparePrediction(s);predictionAction(s,op,v,t);return;}
if(i===5){setupTraining(s);trainingAction(s,op,v,t);return;}
if(i===6){setupReflection(s);reflectionAction(s,op,v,t);return;}}


export function updateTokenLayout(s){if(s.token.board.length===tokens.length)return s;s.previousTokenLayout=s.token;const remaining=s.token.hints;s.token=deal();s.token.hints=remaining;for(let i=0;i<3-remaining;i++)s.token.revealed.push(s.token.prefilled[i]);if(s.complete.includes(0))s.evidence.tokens=[...tokens];return s;}
