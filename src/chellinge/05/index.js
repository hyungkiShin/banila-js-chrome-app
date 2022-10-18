const clock = document.querySelector("h2#clock");

function getClock() {
  const christmasDate = new Date("2022-12-25").getTime();

  const distance = (christmasDate - Date.now()) // new Date(christmasDate - calcDay)

  // const day = String(distance.getDay()).padStart(2, "0")
  // const hour = String(distance.getHours()).padStart(2, "0")
  // const min = String(distance.getMinutes()).padStart(2, "0")
  // const ss = String(distance.getSeconds()).padStart(2, "0")

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

getClock();
setInterval(getClock, 1000)