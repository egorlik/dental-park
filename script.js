document.getElementById('f').addEventListener('submit',function(ev){
ev.preventDefault();
var f=ev.target,n=f.n.value.trim(),p=f.p.value.replace(/[^\d+]/g,''),e=document.getElementById('e');
if(!n){e.textContent='Укажите ваше имя';f.n.focus();return}
if(p.replace(/\D/g,'').length<9){e.textContent='Проверьте номер телефона';f.p.focus();return}
e.textContent='';
document.getElementById('fields').style.display='none';
document.getElementById('okt').textContent=n+', мы перезвоним вам по номеру '+f.p.value.trim()+' и подтвердим время.';
document.getElementById('ok').classList.add('show');
});

/* Примеры работ. Чтобы подставить реальные фото, укажите bi (до) и ai (после) (пути к файлам). */
var WORKS=[
{t:'Профессиональная гигиена',d:' Бережно удалили пигментированный налёт и зубной камень за один визит. Вернули естественную белизну и гладкость эмали без вреда.',b:'#D8C27E',a:'#FFFFFF', bi:'img/work/web-1-detartra.jpg', ai:'img/work/web-2-detarta.jpg'},
{t:'Лечение кариеса зубов ',d:'Удалили скрытый кариес, восстановили анатомическую форму жевательной поверхности и бугры. Зубы выглядят и работают как абсолютно здоровые.',b:'#CDBB8A',a:'#FBFDFC',bi:'img/work/car-1.jpg',ai:'img/work/car-2.jpg'},
{t:' Частичная реабилитация ',d:'Восстановили утраченные зубы, исправили форму и придали улыбке безупречный, но естественный вид. Вернули уверенность и комфорт при жевании.',b:'#C9B88F',a:'#FFFFFF',bi:'img/work/rem-1.jpg',ai:'img/work/rem-2.jpg'}
];
function teeth(c){
var x=[18,66,114,162,210,258],h=[84,96,104,104,96,84],r='';
for(var i=0;i<6;i++)r+='<rect x="'+x[i]+'" y="'+(110-h[i])+'" width="40" height="'+h[i]+'" rx="16" fill="'+c+'" stroke="rgba(0,0,0,.12)"/>';
return '<svg viewBox="0 0 300 120" aria-hidden="true">'+r+'</svg>';
}
var box=document.getElementById('works');
WORKS.forEach(function(w,i){
var el=document.createElement('article');el.className='work';
el.innerHTML='<div class="cmp"><div class="l aft"'+(w.ai?' style="background-image:url(\''+w.ai+'\')"':'')+'>'+(w.ai?'':teeth(w.a))+'</div>'
+'<div class="l bef"'+(w.bi?' style="background-image:url(\''+w.bi+'\')"':'')+'>'+(w.bi?'':teeth(w.b))+'</div>'
+'<span class="t1">До</span><span class="t2">После</span><div class="bar"></div>'
+'<input type="range" min="0" max="100" value="50" aria-label="Сравнить до и после: '+w.t+'"></div>'
+'<h3>'+w.t+'</h3><p>'+w.d+'</p>';
var cmp=el.querySelector('.cmp');
el.querySelector('input').addEventListener('input',function(e){cmp.style.setProperty('--p',e.target.value+'%')});
box.appendChild(el);
});


/* Врачи: данные для карточки «Подробнее». Фото: поле photo, например 'img/ivanova.jpg'. */
var DOCS=[
{n:'Дарья Юрьевна Балаур',r:'Глав-Врач',i:'АИ',photo:'img/glav.jpg',
 b:'Более 12 лет лечит зубы так, чтобы пациент забыл о них на долгие годы. Любит сложные случаи и художественную реставрацию, всегда объясняет, что и зачем делает.',
 e:['Государственный медицинский университет, стоматология','Курсы повышения квалификации по эндодонтии','Участник стоматологических конференций'],
 d:['Лечение кариеса','Лечение каналов','Реставрация','Профессиональная чистка']},
{n:'Петров Михаил Олегович',r:'Хирург-имплантолог',i:'ПМ',photo:'',
 b:'Выполняет операции любой сложности: от удаления зубов до имплантации с костной пластикой. Работает спокойно и точно, заранее планирует результат.',
 e:['Государственный медицинский университет, стоматология','Ординатура по хирургической стоматологии','Обучение имплантологии на международных курсах'],
 d:['Имплантация','Удаление зубов','Костная пластика','Синус-лифтинг']},
{n:'Аванесян Рафаэль Каренович',r:'Врач-стоматолог',i:'СЕ',photo:'img/raf.jpg',
 b:'Помогает исправить прикус и выровнять зубы в любом возрасте. Подбирает систему под задачу и образ жизни пациента: брекеты или прозрачные элайнеры.',
 e:['Государственный медицинский университет, стоматология','Специализация по ортодонтии','Сертификаты по работе с элайнерами'],
 d:['Брекеты','Элайнеры','Исправление прикуса','Ретейнеры']},
{n:'Коваль Дмитрий Андреевич',r:'Детский стоматолог',i:'КД',photo:'',
 b:'Умеет найти подход к самым маленьким пациентам: превращает осмотр в игру, а лечение в спокойную процедуру без слёз.',
 e:['Государственный медицинский университет, стоматология','Курсы по детской стоматологии и поведенческой коррекции'],
 d:['Лечение молочных зубов','Герметизация фиссур','Серебрение','Профилактика']}
];
var dm=document.getElementById('dm');
function fill(el,arr){el.innerHTML='';arr.forEach(function(t){var li=document.createElement('li');li.textContent=t;el.appendChild(li)})}
document.querySelectorAll('.more').forEach(function(btn){
btn.addEventListener('click',function(){
var d=DOCS[btn.dataset.d],ph=document.getElementById('dmi');
document.getElementById('dmn').textContent=d.n;
document.getElementById('dmr').textContent=d.r;
document.getElementById('dmb').textContent=d.b;
fill(document.getElementById('dme'),d.e);fill(document.getElementById('dmd'),d.d);
var im=btn.closest('.doc').querySelector('.ph img'),src=d.photo||(im&&im.getAttribute('src'))||btn.closest('.doc').querySelector('.ph').dataset.photo;
ph.dataset.i=d.i;ph.style.backgroundImage=src?'url("'+src+'")':'';
dm.showModal();
});
});
dm.querySelector('.x').addEventListener('click',function(){dm.close()});
document.getElementById('dmc').addEventListener('click',function(){dm.close()});
dm.addEventListener('click',function(e){if(e.target===dm)dm.close()});


/* Плавное появление блоков, подсветка меню, полоса прокрутки, маска телефона */
(function(){
var ph=document.querySelector('input[name=p]');
ph.addEventListener('focus',function(){if(!ph.value)ph.value='+373 '});
var bar=document.getElementById('prog'),tick=false;
function upd(){var m=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(m>0?Math.min(scrollY/m,1):0)+')';tick=false}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
if(!('IntersectionObserver' in window))return;
var els=document.querySelectorAll('.first .hero .w>div:not(.leaf),.facts span,.head,.svc article,.doc,.work,.why li,.steps>div,.book .grid>div,.book form');
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;var el=e.target;io.unobserve(el);
el.classList.add('in');
setTimeout(function(){el.classList.remove('rv','in')},1300+parseFloat(el.style.getPropertyValue('--d')||0)*1000);
})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(el){
var sib=Array.prototype.indexOf.call(el.parentNode.children,el);
el.style.setProperty('--d',(Math.min(sib,6)*0.09).toFixed(2)+'s');
el.classList.add('rv');io.observe(el);
});
var links={};document.querySelectorAll('nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
var so=new IntersectionObserver(function(es){es.forEach(function(e){
if(e.isIntersecting){for(var k in links)links[k].classList.remove('act');if(links[e.target.id])links[e.target.id].classList.add('act')}
})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(function(s){so.observe(s)});
})();

/* Фото врачей на карточках берутся из того же поля photo в DOCS */
document.querySelectorAll('.doc .ph').forEach(function(el,i){
var p=el.dataset.photo||(DOCS[i]&&DOCS[i].photo);
if(p){el.style.backgroundImage='url("'+p+'")';el.classList.add('has')}
});
