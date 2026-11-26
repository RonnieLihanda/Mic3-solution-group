const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

(function(){var h=document.querySelector('header'),n=h&&h.querySelector('nav');if(!n)return;
var b=document.createElement('button');b.className='menu-btn';b.setAttribute('aria-label','Menu');b.innerHTML='<span></span>';
h.insertBefore(b,n);b.addEventListener('click',function(){h.classList.toggle('open')});
n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('open')})});})();
