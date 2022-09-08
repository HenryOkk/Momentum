const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImgae = images[Math.floor(Math.random() * images.length)];
const bgImgae = document.createElement("img");

bgImgae.src = `img/${chosenImgae}`;
bgImgae.id = "background";
document.body.appendChild(bgImgae);
