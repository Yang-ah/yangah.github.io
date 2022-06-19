const imgs = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];
const body = document.querySelector("body");
const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
body.style.backgroundImage = `url("./img/${randomImg}")`;

// background-img end

const clock = document.querySelector(".clock");

function getClock() {
  const newTime = new Date();
  const hour = String(newTime.getHours()).padStart(2, "0");
  const minute = String(newTime.getMinutes()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}`;
}

getClock();
setInterval(getClock, 1000);
