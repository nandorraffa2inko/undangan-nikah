document.addEventListener("DOMContentLoaded", function(){

const btn = document.getElementById("btn-buka");
const cover = document.getElementById("opening-cover");
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");

/* OPENING */
if(btn){
btn.addEventListener("click", function(){
cover.classList.add("open");

music.volume = 0;
music.play().catch(()=>{});

let fade = setInterval(function(){
if(music.volume < 0.5){
music.volume += 0.02;
}else{
clearInterval(fade);
}
},200);
});
}

/* MUSIC TOGGLE */
if(toggle){
toggle.addEventListener("click", function(){
if(music.paused){ music.play(); }
else{ music.pause(); }
});
}

/* COUNTDOWN */
const wedding = new Date("December 20, 2026 08:00:00").getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

if(days){
setInterval(function(){
const now = new Date().getTime();
const dist = wedding - now;

if(dist < 0){
document.getElementById("countdown-timer").innerHTML = "<h3>Acara Sedang Berlangsung 💍</h3>";
return;
}

days.textContent = Math.floor(dist/(1000*60*60*24));
hours.textContent = Math.floor((dist/(1000*60*60))%24);
minutes.textContent = Math.floor((dist/(1000*60))%60);
seconds.textContent = Math.floor((dist/1000)%60);

},1000);
}

/* COPY REKENING */
const copyBtn = document.querySelector(".copy-btn");
if(copyBtn){
copyBtn.addEventListener("click", function(){
const no = document.querySelector(".bank-number").textContent;
navigator.clipboard.writeText(no);
copyBtn.textContent = "Berhasil Disalin ✓";
setTimeout(()=>{ copyBtn.textContent="Salin Nomor Rekening"; },2000);
});
}

/* COMMENT */
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

/* PARTICLE GOLD */
const canvas = document.getElementById("gold-particles");
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

/* PARALLAX SMOOTH */
window.addEventListener("scroll", function(){
const parallax = document.querySelector(".parallax-section");
let offset = window.pageYOffset;
parallax.style.backgroundPositionY = offset * 0.5 + "px";
});

});