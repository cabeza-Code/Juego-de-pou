window.onload = ()=>{
 let caja = document.querySelector('.caja');
 let pou = document.querySelector('.pou');
 let alto = caja.getBoundingClientRect().height;
 let ancho = caja.getBoundingClientRect().width;
 
let p = {
 x:0,
 y:0,
 xv:0,
 yv:0
};
setInterval(()=>{
 p.x += p.xv;
 p.y += p.yv;
 p.yv += 0.5;
 pou.style.transform = `translatex(${p.x}px)`+ `translatey(${p.y}px)`; 
 if(p.y + 80 + p.yv > alto) {
    p.yv = 0;
 }
 let a = Math.floor(Math.random()*ancho)
 let pi = document.querySelectorAll('.piso');
 pi.forEach((e,i)=>{
 let yy = e.getBoundingClientRect().y;
 let xx = e.getBoundingClientRect().x;
 e.style.transform += `translatey(1.5px)`;
 if(yy + 30 > alto) {
    e.remove()
 }
 if(xx + 120 > ancho ) {
    e.style.left = `${a}px`;
 }
 });
 
 pi.forEach((e,i)=>{
 let x = pi[i].getBoundingClientRect().x;
 let y = pi[i].getBoundingClientRect().y;
 if(p.y + 80 + p.yv > y && p.x + 80 > x && 
    p.x < x + 120 && p.y + 80 < y) {
    p.yv = 0;
 };
 });
},1000/60);

let b = document.querySelectorAll('.btn');

b[1].addEventListener('touchstart',()=>{
 p.yv = -15
});

b[0].addEventListener('touchstart',()=>{
 p.xv = -1;
});

b[2].addEventListener('touchstart',()=>{
 p.xv = 1;
});

setInterval(()=>{
 let a = Math.floor(Math.random()*ancho)
 let p = document.createElement('div');
 caja.appendChild(p);
 p.classList.add('piso');
 p.style.left = `${a}px`;
},3000)

};//inicio 
