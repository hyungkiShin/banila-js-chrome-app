const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

// button DOM
const btn = document.querySelector('button');

// body DOM
const body = document.querySelector('body');

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function handleRandomBackgroundColor() {
  const random1 = randomColor()
  const random2 = randomColor()

  body.style.background = `linear-gradient(0.25turn, ${random1}, ${random2})`;
}

btn.addEventListener('click', handleRandomBackgroundColor)
