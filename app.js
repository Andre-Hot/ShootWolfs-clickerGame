"use strict";
window.addEventListener("load", ready);

//globale variabler
let points = 0;
let lives = 3;

function ready() {
  console.log("JavaScript is ready!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  document.querySelector("#btn_restart").addEventListener("click", startGame);
  document
    .querySelector("#btn_go_to_start")
    .addEventListener("click", showStartScreen);
}

function startGame() {
  console.log("Game starts");

  // Sætter liv og points til start værdier
  resetLives();
  resetPoints();
  showGameScreen();

  // starter baggrundsmusik
  document.querySelector("#sound_hunting").volume = 0.1;
  document.querySelector("#sound_hunting").play();

  // skjuler start skærmen efter spillet starter
  document.querySelector("#start").classList.add("hidden");

  // Til føjer bevægelse til hver container
  startAnimationer();

  // start timer
  startTimer();

  // Tilføjer start positioner til containerne
  startPositioner();

  // Tilføjer click event til hver container
  startClick();

  // Tilføjer event så containerne har en ny position når der er kørt over skærmen.
  positionRestart();
}

// ========================== \\
// ===== Start elements ===== \\
// ========================== \\

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
  // Fjern hidden  class fra startskærm og tilføjer til game over og level complete.
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
  //Liv bliver sat til 4
  lives = 3;

  // nulstiller alle hearts så de ikke er grå.
  document.querySelector("#heart0").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");

  document.querySelector("#heart0").classList.add("active_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
}

function resetPoints() {
  // nulstiller points
  points = 0;
  //nulstiller antallet af viste points
  displayPoints();
}

function startTimer() {
  // sætter timer-animationen i gang
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføjer en eventlistener der lytter om animationen er færdig.
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

// ======================== \\
// ====== Scoreboard ====== \\
// ======================== \\

// Tæller points for duck
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

// Tilføjer points til scoreboard
function displayPoints() {
  console.log("displayNumber");
  document.querySelector("#point_count").textContent = points;
}

// Tæller lives
function decrementLives() {
  console.log("decrementLives");
  lives--;

  if (lives <= 0) {
    gameOver();
  } else {
    displayDecrementedLives();
  }
}

// fjerner lives fra lifeboard
function displayDecrementedLives() {
  console.log("displayDecrementedLives");
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

// ========================= \\
// ====== End of game ====== \\
// ========================= \\

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
  // Stopper musik
  document.querySelector("#sound_hunting").pause();
  document.querySelector("#sound_dogshot").pause();
  document.querySelector("#sound_hunting").currentTime = 0;
  // fjerner click
  document
    .querySelector("#duck1_container")
    .removeEventListener("click", duckClick);
  document
    .querySelector("#duck2_container")
    .removeEventListener("click", duckClick);
  document
    .querySelector("#duck3_container")
    .removeEventListener("click", duckClick);
  document
    .querySelector("#dog1_container")
    .removeEventListener("click", dogClick);
  document
    .querySelector("#dog2_container")
    .removeEventListener("click", dogClick);
  document
    .querySelector("#goose1_container")
    .removeEventListener("click", gooseClick);
  document
    .querySelector("#goose2_container")
    .removeEventListener("click", gooseClick);

  // Stopper animation
  document
    .querySelector("#duck1_container")
    .classList.remove("duck_move1", "duck_move2", "duck_move3");
  document
    .querySelector("#duck2_container")
    .classList.remove("duck_move1", "duck_move2", "duck_move3");
  document
    .querySelector("#duck3_container")
    .classList.remove("duck_move1", "duck_move2", "duck_move3");
  document
    .querySelector("#goose1_container")
    .classList.remove("goose_move1", "goose_move2");
  document
    .querySelector("#goose2_container")
    .classList.remove("goose_move1", "goose_move2");
  document
    .querySelector("#dog1_container")
    .classList.remove("dog_move1", "dog_move2");
  document
    .querySelector("#dog2_container")
    .classList.remove("dog_move1", "dog_move2");

  // Fjerner timer
  document.querySelector("#time_sprite").classList.remove("shrink");
}

// ======================================== \\
// ====== Clicking on a good element ====== \\
// ======================================== \\

function duckClick() {
  console.log("duckClick");
  // Laver lokal variabel
  let duck = this;
  // forhindre gentagne clicks
  duck.removeEventListener("click", duckClick);

  // stop duck container
  duck.classList.add("paused");

  // sæt forsvind-animation på coin sprite
  duck.querySelector("img").classList.add("zoom_out");

  // når forsvind animationen er færdig, duckGone
  duck.addEventListener("animationend", duckGone);

  // Afspillet duck-lyd
  document.querySelector("#sound_gunshot").currentTime = 0;
  document.querySelector("#sound_gunshot").volume = 0.05;
  document.querySelector("#sound_gunshot").play();

  // Tilføjer +1 til points ved click
  incrementDuckPoints();
}

function duckGone() {
  console.log("duckGone");
  // Laver lokal variabel
  let duck = this;

  //Fjerner evnet der startede functionen
  duck.removeEventListener("animationend", duckGone);

  //Fjerner class med forsvind animation
  duck.querySelector("img").classList.remove("zoom_out");

  //Fjerner pause fra container
  duck.classList.remove("paused");

  // genstarter animationen for container
  duckRestart.call(this);
  // Tilføjer event så anden kan klikkes på igen
  duck.addEventListener("click", duckClick);
}

function duckRestart() {
  console.log("duckRestart");
  // laver lokal variabel
  let duck = this;

  // Genstarter bevægelsen fra venstre mod højre
  duck.classList.remove("duck_move1", "duck_move2", "duck_move3");

  let move = Math.floor(Math.random() * 3) + 1;
  duck.classList.add("duck_move" + move);

  // Sætter nu position for container
  duck.classList.remove("positionDuck1", "positionDuck2", "positionDuck3");

  let pos = Math.floor(Math.random() * 3) + 1;

  duck.classList.add("positionDuck" + pos);

  // sææter nu speed for container
  duck.classList.remove("speed1", "speed2", "speed3", "speed4", "speed5");

  let speed = Math.floor(Math.random() * 5) + 1;
  duck.classList.add("speed" + speed);
}

// =========== Goose elements ============ \\

function gooseClick() {
  console.log("gooseClick");
  // Laver lokal variabel
  let goose = this;
  // forhindre gentagne clicks
  goose.removeEventListener("click", gooseClick);

  // stop goose container
  goose.classList.add("paused");

  // sæt forsvind-animation på goose sprite
  goose.querySelector("img").classList.add("zoom_out");

  // når forsvind animationen er færdig, gooseGone
  goose.addEventListener("animationend", gooseGone);

  // Afspillet goose-lyd
  document.querySelector("#sound_gunshot").currentTime = 0;
  document.querySelector("#sound_gunshot").volume = 0.05;
  document.querySelector("#sound_gunshot").play();

  // Tilføjer +2 til points ved click
  incrementGoosePoints();
}

function gooseGone() {
  console.log("gooseGone");
  // Laver lokal variabel
  let goose = this;

  //Fjerner evnet der startede functionen
  goose.removeEventListener("animationend", gooseGone);

  //Fjerner class med forsvind animation
  goose.querySelector("img").classList.remove("zoom_out");

  //Fjerner pause fra container
  goose.classList.remove("paused");

  // genstarter animationen for container
  gooseRestart.call(this);
  // Tilføjer event så anden kan klikkes på igen
  goose.addEventListener("click", gooseClick);
}

function gooseRestart() {
  console.log("gooseRestart");
  // laver lokal variabel
  let goose = this;

  //Genstarter bevægelse fra venstre mod højre
  goose.classList.remove("goose_move1", "goose_move2");
  goose.offsetWidth;
  let move = Math.floor(Math.random() * 2) + 1;
  goose.classList.add("goose_move" + move);

  // Sætter nu position for container
  goose.classList.remove("positionGoose1", "positionGoose2");
  let pos = Math.floor(Math.random() * 2) + 1;
  goose.classList.add("positionGoose" + pos);

  // sææter nu speed for container
  goose.classList.remove("speed1", "speed2", "speed3", "speed4", "speed5");
  let speed = Math.floor(Math.random() * 5) + 1;
  goose.classList.add("speed" + speed);
}

// ======================================= \\
// ====== Clicking on a bad element ====== \\
// ======================================= \\

// function for når den første hund klikkes på
function dogClick() {
  console.log("dogClick");

  // laver lokal variabel
  let dog = this;
  //Fjerner event så hun ikke kan klikkes på igen
  dog.removeEventListener("click", dogClick);

  // pauser move animationen for hund-container
  dog.classList.add("paused");

  // laver zoom_out animation på selve spriten af hunden
  dog.querySelector("img").classList.add("zoom_out");

  //når forsvind animationen er færdig så kør dogGone event
  dog.addEventListener("animationend", dogGone);

  // Afspillet dog-lyd
  document.querySelector("#sound_gunshot").currentTime = 0;
  document.querySelector("#sound_gunshot").volume = 0.05;
  document.querySelector("#sound_gunshot").play();

  document.querySelector("#sound_dogshot").currentTime = 0;
  document.querySelector("#sound_dogshot").volume = 0.1;
  document.querySelector("#sound_dogshot").play();

  // fjern -1 fra lives ved click
  decrementLives();
}

// funtion til at få hunden tilbage på skærmen
function dogGone() {
  console.log("dogGone");
  let dog = this;
  //Fjerner evnet der startede functionen
  dog.removeEventListener("animationend", dogGone);

  //Fjerner class med forsvind animation
  dog.querySelector("img").classList.remove("zoom_out");

  //Fjerner pause fra container
  dog.classList.remove("paused");

  //Genstarter bevægelse fra venstre mod højre
  dogRestart.call(this);

  // Tilføjer event så anden kan klikkes på igen
  dog.addEventListener("click", dogClick);
}

function dogRestart() {
  console.log("dogRestart");
  // laver lokal variabel
  let dog = this;

  //Genstarter bevægelse fra venstre mod højre
  dog.classList.remove("dog_move1", "dog_move2");
  let move = Math.floor(Math.random() * 2) + 1;
  dog.classList.add("dog_move" + move);

  // Sætter nu position for container
  dog.classList.remove("positionDog1", "positionDog2");

  let pos = Math.floor(Math.random() * 2) + 1;

  dog.classList.add("positionDog" + pos);

  // sææter nu speed for container
  dog.classList.remove("speedDog1", "speedDog2");

  let speed = Math.floor(Math.random() * 2) + 1;
  dog.classList.add("speedDog" + speed);
  console.log(`speed af ny dog er ${speed}`);
}
