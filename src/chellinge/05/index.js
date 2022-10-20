/**
 * 냈던 과제
const clock = document.querySelector("h2#clock");

function getClock() {
  const christmasDate = new Date("2022-12-25").getTime();

  const distance = (christmasDate - Date.now()) // new Date(christmasDate - calcDay)

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

getClock();
setInterval(getClock, 1000)
*/

/**
 * 니코 쌤 답안
const clockTitle = document.querySelector(".js-clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();
  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

getTime();
setInterval(getTime, 1000);
*/

// 나의 선택
const clockTitle = document.querySelector("h2#clock");

function getTime() {
  const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
  const now = new Date();

  // This is in milisecondsx
  const difference = new Date(xmasDay - now);
  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);

  const days = String(Math.floor(hoursInMs / 24)).padStart(2, "0");
  const hours = String(hoursInMs % 24).padStart(2, "0");
  const minutes = String(minutesInMs % 60).padStart(2, "0");
  const seconds = String(secondsInMs % 60).padStart(2, "0");

  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getTime();
setInterval(getTime, 1000);
