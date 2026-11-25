document.documentElement.classList.add('js');
try{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
}catch(e){document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'))}

document.getElementById('cf').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('n').value,em=document.getElementById('e').value,m=document.getElementById('m').value;
  const body=encodeURIComponent(m+'\n\n— '+n+' ('+em+')');
  location.href='mailto:mehakpassi829@gmail.com?subject='+encodeURIComponent('Hello from your portfolio')+'&body='+body;
  e.target.querySelector('button').textContent='Opening email… 🌸';
});

document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('pointermove',e=>{
    const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    c.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg)`;
  });
  c.addEventListener('pointerleave',()=>c.style.transform='');
});


/* Project cards: live link + showcase modal + lightbox */
(function(){
  const vc=document.getElementById('vc'),lb=document.getElementById('lb'),lbi=document.getElementById('lbi');
  let last=null;
  function openVC(){last=document.activeElement;vc.classList.add('open');vc.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';vc.scrollTop=0}
  function closeVC(){vc.classList.remove('open');vc.setAttribute('aria-hidden','true');document.body.style.overflow='';if(last&&last.focus)last.focus()}
  function closeLB(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true')}
  document.querySelectorAll('.card[data-href]').forEach(c=>c.addEventListener('click',e=>{if(e.target.closest('a'))return;window.open(c.dataset.href,'_blank','noopener')}));
  document.querySelectorAll('[data-open="vc"]').forEach(c=>c.addEventListener('click',e=>{e.stopPropagation();openVC()}));
  document.getElementById('vcBack').addEventListener('click',closeVC);
  vc.querySelectorAll('figure img').forEach(i=>i.addEventListener('click',()=>{lbi.src=i.src;lbi.alt=i.alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));
  lb.addEventListener('click',closeLB);
  addEventListener('keydown',e=>{if(e.key==='Escape'){if(lb.classList.contains('open'))closeLB();else if(vc.classList.contains('open'))closeVC()}});
})();

if(typeof THREE!=='undefined'){
try{
const cols=[0xf7c5d5,0xc9b8f0,0xa8e6cf,0xffe3b3];
let mx=0,my=0;
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=-(e.clientY/innerHeight*2-1)});

const bg=document.getElementById('bg');
const R=new THREE.WebGLRenderer({canvas:bg,alpha:true,antialias:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100);C.position.z=14;
S.add(new THREE.AmbientLight(0xffffff,.85));
const L1=new THREE.PointLight(0xffb6d5,1.3,60);L1.position.set(8,8,10);S.add(L1);
const L2=new THREE.PointLight(0xb9a6ff,1.1,60);L2.position.set(-8,-6,8);S.add(L2);
const G=[new THREE.IcosahedronGeometry(1,1),new THREE.TorusGeometry(.8,.3,16,40),new THREE.SphereGeometry(1,32,32),new THREE.OctahedronGeometry(1)];
const objs=[];
for(let i=0;i<22;i++){
  const m=new THREE.Mesh(G[i%4],new THREE.MeshStandardMaterial({color:cols[i%4],roughness:.25,metalness:.1}));
  m.position.set((Math.random()-.5)*22,6-Math.random()*34,-Math.random()*8);
  m.scale.setScalar(.5+Math.random()*.9);
  m.userData={r:Math.random()*.01+.003,o:Math.random()*6,y:m.position.y};
  S.add(m);objs.push(m);
}
function size(){R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}
addEventListener('resize',size);size();

const cv=document.getElementById('balls');
const R2=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
R2.setPixelRatio(Math.min(devicePixelRatio,2));
const S2=new THREE.Scene(),C2=new THREE.PerspectiveCamera(50,1,.1,100);C2.position.z=12;
S2.add(new THREE.AmbientLight(0xffffff,.9));
const L3=new THREE.PointLight(0xffffff,1,50);L3.position.set(5,6,10);S2.add(L3);
function tex(t,c){
  const k=document.createElement('canvas');k.width=k.height=256;const g=k.getContext('2d');
  g.fillStyle=c;g.fillRect(0,0,256,256);g.fillStyle='#2a2140';
  g.font='700 '+(t.length>5?40:54)+'px Syne, sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillText(t,128,128);
  return new THREE.CanvasTexture(k);
}
const names=['Python','C++','JS','SQL','FastAPI','Flask','ML','LLMs','Git'];
const balls=names.map((n,i)=>{
  const c='#'+cols[i%4].toString(16).padStart(6,'0');
  const m=new THREE.Mesh(new THREE.SphereGeometry(.95,32,32),new THREE.MeshStandardMaterial({map:tex(n,c),roughness:.3}));
  m.rotation.y=-Math.PI/2;
  m.userData={v:new THREE.Vector2(0,0)};
  m.position.set((Math.random()-.5)*8,(Math.random()-.5)*4,0);
  S2.add(m);return m;
});
let px=99,py=99;
cv.addEventListener('pointermove',e=>{
  const r=cv.getBoundingClientRect(),hh=Math.tan(25*Math.PI/180)*12,hw=hh*(r.width/r.height);
  px=((e.clientX-r.left)/r.width*2-1)*hw;py=-((e.clientY-r.top)/r.height*2-1)*hh;
});
cv.addEventListener('pointerleave',()=>{px=py=99});
function size2(){const w=cv.clientWidth,h=cv.clientHeight;R2.setSize(w,h,false);C2.aspect=w/h;C2.updateProjectionMatrix()}
addEventListener('resize',size2);size2();

const clock=new THREE.Clock();
(function loop(){
  const t=clock.getElapsedTime();
  const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  const p=scrollY/max;
  C.position.y+=((-p*26)-C.position.y)*.06;
  C.position.x+=((mx*1.6)-C.position.x)*.05;
  objs.forEach(o=>{o.rotation.x+=o.userData.r;o.rotation.y+=o.userData.r*1.4;o.position.y=o.userData.y+Math.sin(t+o.userData.o)*.35});
  R.render(S,C);

  const hh=Math.tan(25*Math.PI/180)*12,hw=hh*C2.aspect;
  balls.forEach((b,i)=>{
    const v=b.userData.v,p2=b.position;
    v.x+=-p2.x*.0015;v.y+=-p2.y*.0015;
    const dx=p2.x-px,dy=p2.y-py,d=Math.hypot(dx,dy);
    if(d<2.6&&d>0){v.x+=dx/d*.05;v.y+=dy/d*.05}
    for(let j=i+1;j<balls.length;j++){
      const o=balls[j].position,ex=o.x-p2.x,ey=o.y-p2.y,ed=Math.hypot(ex,ey);
      if(ed<1.9&&ed>0){const f=(1.9-ed)*.02;v.x-=ex/ed*f;v.y-=ey/ed*f;balls[j].userData.v.x+=ex/ed*f;balls[j].userData.v.y+=ey/ed*f}
    }
    v.multiplyScalar(.97);p2.x+=v.x;p2.y+=v.y;
    if(Math.abs(p2.x)>hw-1){p2.x=Math.sign(p2.x)*(hw-1);v.x*=-.6}
    if(Math.abs(p2.y)>hh-1){p2.y=Math.sign(p2.y)*(hh-1);v.y*=-.6}
    b.rotation.y=-Math.PI/2+v.x*3+Math.sin(t+i)*.15;b.rotation.x=-v.y*3;
  });
  R2.render(S2,C2);
  requestAnimationFrame(loop);
})();
}catch(err){console.error('3D failed',err)}
}
