document.addEventListener("DOMContentLoaded", function(){

/* ================= ELEMENT ================= */
const btn = document.getElementById("btn-buka");
const cover = document.getElementById("opening-cover");
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

/* ================= OPENING + MUSIC FADE ================= */
if(btn){
btn.addEventListener("click", function(){

cover.classList.add("open");

if(music){
music.volume = 0;
music.play().catch(()=>{});

let fade = setInterval(function(){
if(music.volume < 0.5){
music.volume += 0.02;
}else{
clearInterval(fade);
}
},200);
}

});
}

/* ================= MUSIC TOGGLE ================= */
if(toggle && music){
toggle.addEventListener("click", function(){
if(music.paused){
music.play();
}else{
music.pause();
}
});
}

/* ================= COUNTDOWN ================= */
const wedding = new Date("April 5, 2026 12:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timerBox = document.getElementById("countdown-timer");

if(days){
setInterval(function(){

const now = new Date().getTime();
const distance = wedding - now;

if(distance < 0){
timerBox.innerHTML = "<h3>Acara Sedang Berlangsung 💍</h3>";
return;
}

days.textContent = Math.floor(distance/(1000*60*60*24));
hours.textContent = Math.floor((distance/(1000*60*60))%24);
minutes.textContent = Math.floor((distance/(1000*60))%60);
seconds.textContent = Math.floor((distance/1000)%60);

},1000);
}

/* ================= COPY REKENING (MULTI) ================= */
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button=>{
button.addEventListener("click", function(){

const number = button.parentElement.querySelector(".bank-number").textContent;

navigator.clipboard.writeText(number);

button.textContent = "Berhasil Disalin ✓";

setTimeout(()=>{
button.textContent = "Salin Nomor";
},2000);

});
});

/* ================= COMMENT SYSTEM ================= */
const form = document.getElementById("comment-form");
const list = document.getElementById("comment-list");

if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;
const message = document.getElementById("message").value;

const div = document.createElement("div");
div.classList.add("comment-item");
div.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

list.prepend(div);
form.reset();

});
}

/* ================= GOLD PARTICLES ================= */
const canvas = document.getElementById("gold-particles");

if(canvas){

const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

for(let i=0;i<60;i++){
particles.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
r: Math.random()*2,
d: Math.random()*1
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="rgba(212,175,55,0.8)";
ctx.beginPath();

particles.forEach(p=>{
ctx.moveTo(p.x,p.y);
ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);
});

ctx.fill();
update();
}

function update(){
particles.forEach(p=>{
p.y += p.d;

if(p.y > canvas.height){
p.y = 0;
p.x = Math.random()*canvas.width;
}
});
}

setInterval(draw,33);

}

/* ================= PARALLAX ================= */
window.addEventListener("scroll", function(){

const parallax = document.querySelector(".parallax-section");

if(parallax){
let offset = window.pageYOffset;
parallax.style.backgroundPositionY = offset * 0.5 + "px";
}

});

});
