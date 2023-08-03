

let h = document.querySelector('#hr');
let m = document.querySelector('#mn');
let s = document.querySelector('#ss');

setInterval( ()=>{
    let day = new Date();

let hh = day.getHours() * 30 ;
let mm = day.getMinutes() * 6;
let sc = day.getSeconds() * 6;

h.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
m.style.transform = `rotateZ(${mm}deg)`;
s.style.transform = `rotateZ(${sc}deg)`;
})