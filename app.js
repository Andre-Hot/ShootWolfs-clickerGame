"use strict";
window.addEventListener("load", ready);


let points = 0;
let lives = 3;

function ready() {
  console.log("JavaScript is ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document.querySelector("#btn_start").addEventListener("click", showStartScreen);
}

function startGame() {
  console.log("Game starts");

  
  resetLives();
  resetPoints();
  showGameScreen();


  document.querySelector("#sound_hunting").volume = 0.1;
  document.querySelector("#sound_hunting").play();

  
  document.querySelector("#start").classList.add("hidden");

  startAnimationer();

  startTimer();


  startPositioner();


  startClick();

  positionRestart();
}


function startAnimationer() {
  document.querySelector("#wolf1_container").classList.add("wolf_move1");
  document.querySelector("#wolf2_container").classList.add("wolf_move2");
  document.querySelector("#wolf3_container").classList.add("wolf_move3");
  document.querySelector("#deer1_container").classList.add("deer_move1");
  document.querySelector("#deer2_container").classList.add("deer_move1");
  document.querySelector("#deer3_container").classList.add("deer_move1");
}

function startPositioner() {
  document.querySelector("#wolf1_container").classList.add("positionWolf1");
  document.querySelector("#wolf2_container").classList.add("positionWolf2");
  document.querySelector("#wolf3_container").classList.add("positionWolf3");
  document.querySelector("#deer1_container").classList.add("positionDeer1");
  document.querySelector("#deer2_container").classList.add("positionDeer2");
  document.querySelector("#deer3_container").classList.add("positionDeer3");
  

  document.querySelector("#Wolf1_container").classList.add("speed1");
  document.querySelector("#wolf2_container").classList.add("speed2");
  document.querySelector("#wolf3_container").classList.add("speed3");
  document.querySelector("#deer1_container").classList.add("speed4");
  document.querySelector("#deer2_container").classList.add("speed5");
  document.querySelector("#deer3_container").classList.add("speedDeer1");
}

function startClick() {
  document
    .querySelector("#wolf1_container")
    .addEventListener("click", wolfClick);
  document
    .querySelector("#wolf2_container")
    .addEventListener("click", wolfClick);
  document
    .querySelector("#wolf3_container")
    .addEventListener("click", wolfClick);
  document.querySelector("#deer1_container").addEventListener("click", deerClick);
  document.querySelector("#deer2_container").addEventListener("click", deerClick);

  document
    .querySelector("#deer3_container")
    .addEventListener("click", deerClick);
  
}

function positionRestart() {
  document
    .querySelector("#wolf1_container")
    .addEventListener("animationiteration", wolfRestart);
  document
    .querySelector("#wolf2_container")
    .addEventListener("animationiteration", wolfRestart);
  document
    .querySelector("#wolf3_container")
    .addEventListener("animationiteration", wolfRestart);
  document
    .querySelector("#deer1_container")
    .addEventListener("animationiteration", deerRestart);
  document
    .querySelector("#deer2_container")
    .addEventListener("animationiteration", deerRestart);
  document
    .querySelector("#deer3_container")
    .addEventListener("animationiteration", deerRestart);
 
}

function showStartScreen() {
 
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function showGameScreen() {
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function resetLives() {
  
  lives = 3;

  
  document.querySelector("#heart0").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");

  document.querySelector("#heart0").classList.add("active_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
}

function resetPoints() {
 
  points = 0;
  
  displayPoints();
}

function startTimer() {

  document.querySelector("#time_sprite").classList.add("shrink");

 
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  console.log("Tiden er gået!");

  if (points >= 20) {
    levelComplete();
  } else {
    gameOver();
  }
}



function incrementWolfPoints() {
  console.log("incrementWolfPoints");
  points++;
  displayPoints();
}

function incrementWolfPoints() {
  console.log("incrementWolfPoints");
  points = points + 2;
  displayPoints();
}


function displayPoints() {
  console.log("displayNumber");
  document.querySelector("#point_count").textContent = points;
}

function decrementLives() {
  console.log("decrementLives");
  lives--;

  if (lives <= 0) {
    gameOver();
  } else {
    displayDecrementedLives();
  }
}


function displayDecrementedLives() {
  console.log("displayDecrementedLives");
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}


function gameOver() {
  console.log("gameOver");
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#sound_gameOver").volume = 0.25;
  document.querySelector("#sound_gameOver").play();
  stopGame();
}
function levelComplete() {
  console.log("levelComplete");
  document.querySelector("#level_complete").classList.remove("hidden");

  document.querySelector("#sound_levelComplete").volume = 0.2;
  document.querySelector("#sound_levelComplete").play();
  stopGame();
  document.querySelector(
    "#endText"
  ).textContent = `Du nået at få ${points} points🥳`;
}

function stopGame() {
  
  document.querySelector("#sound_hunting").pause();
  document.querySelector("#sound_shootWolf").pause();
  document.querySelector("#sound_hunting").currentTime = 0;
  
  document
    .querySelector("#deer1_container")
    .removeEventListener("click", deerClick);
  document
    .querySelector("#deer2_container")
    .removeEventListener("click", deerClick);
  document
    .querySelector("#deer3_container")
    .removeEventListener("click", deerClick);
  document
    .querySelector("#wolf1_container")
    .removeEventListener("click", wolfClick);
  document
    .querySelector("#wolf2_container")
    .removeEventListener("click", wolfClick);
  document
    .querySelector("#wolf3_container")
    .removeEventListener("click", wolfClick);
 

  
  document
    .querySelector("#deer1_container")
    .classList.remove("deer_move1", "deer_move2", "deer_move3");
  document
    .querySelector("#deer2_container")
    .classList.remove("deer_move1", "deer_move2", "deer_move3");
  document
    .querySelector("#deer3_container")
    .classList.remove("deer_move1", "deer_move2", "deer_move3");
  document
    .querySelector("#wolf1_container")
    .classList.remove("wolf_move1", "wolf_move2");
  document
    .querySelector("#wolf2_container")
    .classList.remove("wolf_move1", "wolf_move2");
  document
    .querySelector("#wolf3_container")
    .classList.remove("wolf_move1", "wolf_move2");
  
  document.querySelector("#time_sprite").classList.remove("shrink");
}



function deerClick() {
  console.log("deerClick");
  
  let deer = this;
 
  deer.removeEventListener("click", deerClick);


  deer.classList.add("paused");

  
  deer.querySelector("img").classList.add("zoom_out");


  deer.addEventListener("animationend", deerGone);

 
  document.querySelector("#sound_gunshot").currentTime = 0;
  document.querySelector("#sound_gunshot").volume = 0.05;
  document.querySelector("#sound_gunshot").play();

 
  incrementDeerPoints();
}

function deerGone() {
  console.log("deerGone");
  
  let deer = this;

  deer.removeEventListener("animationend", deerGone);


  deer.querySelector("img").classList.remove("zoom_out");


  deer.classList.remove("paused");

 
  deerRestart.call(this);
  
  deer.addEventListener("click", deerClick);
}

function deerRestart() {
  console.log("deerRestart");
  
  let deer = this;

 
  deer.classList.remove("deer_move1", "deer_move2", "deer_move3");

  let move = Math.floor(Math.random() * 3) + 1;
  deer.classList.add("deer_move" + move);

  
  deer.classList.remove("positionDeer1", "positionDeer2", "positionDeer3");

  let pos = Math.floor(Math.random() * 3) + 1;

  deer.classList.add("positionDeer" + pos);

  
  deer.classList.remove("speed1", "speed2", "speed3", "speed4", "speed5");

  let speed = Math.floor(Math.random() * 5) + 1;
  deer.classList.add("speed" + speed);
}


function wolfClick() {
  console.log("wolfClick");
  
  let wolf = this;
  
  wolf.removeEventListener("click", wolfClick);


  wolf.classList.add("paused");

  
  wolf.querySelector("img").classList.add("zoom_out");

 
  wolf.addEventListener("animationend", wolfGone);

  
  document.querySelector("#sound_gunshot").currentTime = 0;
  document.querySelector("#sound_gunshot").volume = 0.05;
  document.querySelector("#sound_gunshot").play();

 
  incrementWolfPoints();
}

function wolfGone() {
  console.log("wolfGone");
  
  let wolf = this;


  wolf.removeEventListener("animationend", wolfGone);

 
  wolf.querySelector("img").classList.remove("zoom_out");

  
  wolf.classList.remove("paused");

  
  wolfRestart.call(this);
  
  wolf.addEventListener("click", wolfClick);
}

function wolfRestart() {
  console.log("wolfRestart");
  
  let wolf = this;

  
  wolf.classList.remove("wolf_move1", "wolf_move2");
  wolf.offsetWidth;
  let move = Math.floor(Math.random() * 2) + 1;
  wolf.classList.add("wolf_move" + move);

  
  wolf.classList.remove("positionWolf1", "positionWolf2");
  let pos = Math.floor(Math.random() * 2) + 1;
  wolf.classList.add("positionWolf" + pos);

  
  wolf.classList.remove("speed1", "speed2", "speed3", "speed4", "speed5");
  let speed = Math.floor(Math.random() * 5) + 1;
  wolf.classList.add("speed" + speed);
}



function wolfClick() {
  console.log("wolfClick");

  
  let wolf = this;
 
  wolf.removeEventListener("click", wolfClick);

  
  wolf.classList.add("paused");

  
  wolf.querySelector("img").classList.add("zoom_out");

 
  wolf.addEventListener("animationend", wolfGone);

  
  document.querySelector("#sound_gunshot").currentTime = 0;
  document.querySelector("#sound_gunshot").volume = 0.05;
  document.querySelector("#sound_gunshot").play();

  document.querySelector("#sound_wolfshot").currentTime = 0;
  document.querySelector("#sound_wolfshot").volume = 0.1;
  document.querySelector("#sound_wolfshot").play();

  
  decrementLives();
}

function wolfGone() {
  console.log("wolfGone");
  let wolf = this;

  wolf.removeEventListener("animationend", wolfGone);


  wolf.querySelector("img").classList.remove("zoom_out");

 
  wolf.classList.remove("paused");

  
  wolfRestart.call(this);

  
  wolf.addEventListener("click", wolfClick);
}

function wolfRestart() {
  console.log("wolfRestart");
  
  let wolf = this;

 
  wolf.classList.remove("wolf_move1", "wolf_move2");
  let move = Math.floor(Math.random() * 2) + 1;
  dog.classList.add("wolf_move" + move);

  
  wolf.classList.remove("positionWolf1", "positionWolf2");

  let pos = Math.floor(Math.random() * 2) + 1;

  wolf.classList.add("positionWolf" + pos);

  
  wolf.classList.remove("speedWolf1", "speedWolf2");

  let speed = Math.floor(Math.random() * 2) + 1;
  wolf.classList.add("speedWolf" + speed);
  console.log(`speed af Wolf ${speed}`);
}
