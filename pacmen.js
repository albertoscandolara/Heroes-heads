const heroesHeadsImages = [
  "/images/head-1.svg",
  "/images/head-2.svg",
  "/images/head-3.svg",
  "/images/head-4.svg",
  "/images/head-5.svg",
  "/images/head-6.svg",
  "/images/head-7.svg",
  "/images/head-8.svg",
  "/images/head-9.svg",
  "/images/head-10.svg",
  "/images/head-11.svg",
  "/images/head-12.svg",
  "/images/head-13.svg",
  "/images/head-14.svg",
  "/images/head-15.svg",
  "/images/head-16.svg"
];

let game = document.getElementById("game");
let pos = 0;
let direction = 0;
const heroesHeads = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomHeroHead() {
  return `./images/head-${getRandomInt(1, heroesHeadsImages.length-1)}.svg`;
}

function makeHeroHead() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  // Add image to div id = game
  let newimg = document.createElement("img");
  newimg.style.position = "absolute";
  newimg.src = getRandomHeroHead();
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  game.appendChild(newimg);
  
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  //loop over heads array and move each one and move image in DOM
  heroesHeads.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + 'px';
    item.newimg.style.top = item.position.y + 'px';
  });
  setTimeout(update, 50);
}

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  ) {
    item.newimg.src = getRandomHeroHead();
    item.velocity.x = -item.velocity.x;
  }
  if (
    item.position.y + item.velocity.y + item.newimg.height >
      window.innerHeight ||
    item.position.y + item.velocity.y < 0
  ) {
    item.newimg.src = getRandomHeroHead();
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  heroesHeads.push(makeHeroHead());
}
