document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

const navLinks=document.querySelectorAll(".nav-links a");
const sections=document.querySelectorAll("section");
function activateLink(){
  let y=window.scrollY+120;
  sections.forEach(sec=>{
    if(y>=sec.offsetTop && y<sec.offsetTop+sec.offsetHeight){
      navLinks.forEach(l=>{
        l.classList.remove("active");
        if(l.getAttribute("href")==="#"+sec.id){l.classList.add("active");}
      });
    }
  });
}
window.addEventListener("scroll",activateLink);
window.addEventListener("load",activateLink);

const revealEls=document.querySelectorAll(".hero, .section");
const obs=new IntersectionObserver((ents,o)=>{
  ents.forEach(en=>{
    if(en.isIntersecting){en.target.classList.add("revealed");o.unobserve(en.target);}
  });
},{threshold:.15});
revealEls.forEach(el=>{el.classList.add("hidden");obs.observe(el);});

(function(){
  const el=document.querySelector(".name-typing");
  if(!el) return;
  const text=(el.dataset.text||el.textContent.trim());
  el.textContent="";
  let i=0;
  const speed=120;
  const timer=setInterval(()=>{
    el.textContent=text.slice(0,i+1);
    i++;
    if(i>=text.length){
      clearInterval(timer);
      el.classList.add("typed");
    }
  },speed);
})();

(function(){
  const hero=document.querySelector(".hero");
  if(!hero) return;
  window.addEventListener("scroll",()=>{
    const y=window.scrollY*0.15;
    hero.style.setProperty("--para",y+"px");
  });
})();

(function(){
  const box=document.querySelector(".about-photo");
  if(!box) return;
  const img=box.querySelector("img");
  const max=9;
  box.addEventListener("mousemove",e=>{
    const r=box.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    img.style.transform=`rotateX(${-y*max}deg) rotateY(${x*max}deg) scale(1.02)`;
  });
  box.addEventListener("mouseleave",()=>img.style.transform="rotateX(0) rotateY(0) scale(1)");
})();

(function(){
  const list=document.querySelector(".tech-list.chevron");
  if(!list) return;
  const o=new IntersectionObserver(([en])=>{
    if(en.isIntersecting){list.classList.add("reveal");o.disconnect();}
  },{threshold:.2});
  o.observe(list);
})();

(function(){
  let last=window.scrollY;
  const header=document.querySelector(".site-header");
  if(!header) return;
  window.addEventListener("scroll",()=>{
    const y=window.scrollY;
    if(y>last && y>120){header.classList.add("nav-hide");}
    else{header.classList.remove("nav-hide");}
    last=y;
  });
})();

(function(){
  var y = document.getElementById('year');
  if (y) y.textContent = '© ' + new Date().getFullYear();
})();



(function() {
  const logoContainer = document.querySelector('.tree-container');
  if (!logoContainer) return;
  

  const oldCanvas = document.getElementById('treeCanvas');
  if (oldCanvas) {
    oldCanvas.remove();
  }

  const logo = document.createElement('img');
  logo.src = 'icon mo.png'; 
  logo.alt = 'Mohammed Hani Logo';
  logo.id = 'animatedLogo';
  logo.style.cssText = `
    width: 200px;
    height: 200px;
    object-fit: contain;
    filter: drop-shadow(0 0 30px rgba(124, 58, 237, 0.6));
    animation: logoFloat 3s ease-in-out infinite, logoGlow 2s ease-in-out infinite alternate;
    transition: all 0.3s ease;
  `;
  
  logoContainer.appendChild(logo);
  

  logo.addEventListener('mouseenter', () => {
    logo.style.transform = 'scale(1.1) rotate(5deg)';
    logo.style.filter = 'drop-shadow(0 0 40px rgba(124, 58, 237, 0.8))';
  });
  
  logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1) rotate(0deg)';
    logo.style.filter = 'drop-shadow(0 0 30px rgba(124, 58, 237, 0.6))';
  });
})();