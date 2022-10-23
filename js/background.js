const images = ["002.jpeg","001.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = '1950px';
bgImage.style.height = '1200px';


document.body.appendChild(bgImage);
