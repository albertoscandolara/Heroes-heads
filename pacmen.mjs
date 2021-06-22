import head_1 from 'url:./images/head-1.svg';
import head_2 from 'url:./images/head-2.svg';
import head_3 from 'url:./images/head-3.svg';
import head_4 from 'url:./images/head-4.svg';
import head_5 from 'url:./images/head-5.svg';
import head_6 from 'url:./images/head-6.svg';
import head_7 from 'url:./images/head-7.svg';
import head_8 from 'url:./images/head-8.svg';
import head_9 from 'url:./images/head-9.svg';
import head_10 from 'url:./images/head-10.svg';
import head_11 from 'url:./images/head-11.svg';
import head_12 from 'url:./images/head-12.svg';
import head_13 from 'url:./images/head-13.svg';
import head_14 from 'url:./images/head-14.svg';
import head_15 from 'url:./images/head-15.svg';
import head_16 from 'url:./images/head-16.svg';

const heroesHeadsImages = [
  head_1,
  head_2,
  head_3,
  head_4,
  head_5,
  head_6,
  head_7,
  head_8,
  head_9,
  head_10,
  head_11,
  head_12,
  head_13,
  head_14,
  head_15,
  head_16
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
  return heroesHeadsImages[`${getRandomInt(0, heroesHeadsImages.length-1)}`];
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

document.getElementById('create-hero-head').addEventListener('click', makeOne);
document.getElementById('start-hero-head').addEventListener('click', update);