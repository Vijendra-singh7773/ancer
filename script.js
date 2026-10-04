window.addEventListener('load',()=>{setTimeout(()=>document.querySelector('.loader').classList.add('hide'),1500)});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const hero=document.querySelector('.hero-bg');window.addEventListener('scroll',()=>{if(hero) hero.style.transform=`scale(1.06) translateY(${Math.min(scrollY*.05,35)}px)`},{passive:true});
