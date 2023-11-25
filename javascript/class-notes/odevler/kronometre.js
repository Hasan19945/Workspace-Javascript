


const timeDisplay = document.getElementById("timeDisplay");
console.log(timeDisplay);
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;
playBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    console.log(startTime);
    intervalId = setInterval(updateTime, 1000);
    playBtn.classList = "fa-solid fa-pause";
  } else {
    if (!playBtn.classList.contains("fa-solid fa-pause")) {
      paused = true;
      clearInterval(intervalId);
      playBtn.classList = "fa-solid fa-play";
    }
  }
});
resetBtn.addEventListener("click", () => {
  playBtn.classList = "fa-solid fa-play";
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  min = 0;
  sec = 0;
  timeDisplay.textContent = "00:00:00";
});
const updateTime = () => {
  elapsedTime = Date.now() - startTime;
  console.log(elapsedTime);
  sec = Math.floor((elapsedTime / 1000) % 60);
  min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  const zeroAdd = (timePart) => {
    return ("0" + timePart).length > 2 ? timePart : "0" + timePart;
  };
  sec = zeroAdd(sec);
  min = zeroAdd(min);
  hrs = zeroAdd(hrs);
  timeDisplay.textContent = `${hrs}:${min}:${sec}`;
};







