window.addEventListener("load", start);

var points = 0;
var lives = 3;

function startGame() {
    console.log("Get ready to start!");
    points = 0;
    lives = 3;

    document.querySelector("#wolf_container").classList.add("karen");
    document.querySelector("#wolf_container2").classList.add("wolf2");
    document.querySelector("#deer_conatiner").classList.add("deer");
    document.querySelector("#deer_container2").classList.add("deer2");

    document.querySelector("#wolf_container").addEventListener("click", clickWolf);
    document.querySelector("#deer_container").addEventListener("click", clickDeer);
    document.querySelector("#wolf_container2").addEventListener("click", clickWolf2);
    document.querySelector("#deer_container2").addEventListener("click", clickDeer2);
}

function clickWolf() {
    console.log("you shot a wolf");
    document.querySelector("#wolf_container").removeEventListener("click", clickWolf);
    document.querySelector("#wolf_container").classList.add("paused");
    document.querySelector("#wolf_sprite").classList.add("zoom_out");
    document.querySelector("#wolf_container").addEventListener("End animation", wolfRestart);
    incrementPoints();
}

function clickWolf2() {
    console.log("you shot a wolf");
    document.querySelector("#wolf_container2").removeEventListener("click", clickwolf2);
    document.querySelector("#wolf_container2").classList.add("paused");
    document.querySelector("#wolf_sprite2").classList.add("zoom_out");
    document.querySelector("#wolf_container2").addEventListener("End animation", wolfRestart2);
    incrementPoints();
}

function wolfRestart() {
    console.log("wolf restarts");
    document.querySelector("#wolf_conatiner").removeEventListener("End animation", wolfRestart);
    document.querySelector("#wolf_container").classList.remove("paused");
    document.querySelector("wolf_sprite").classList.remove("zoom_out");
    document.querySelector("#wolf_container").classList.remove("wolf");
    document.querySelector("#wolf_container").offsetWidth;
    document.querySelector("#wolf_container").classList.add("wolf");
    document.querySelector("#wolf_conatiner").addEventListener("click", clickWolf);
}

function wolfRestart2() {

  document.querySelector("#wolf_conatiner").removeEventListener("End animation", wolfRestart2);
  document.querySelector("#wolf_container2").classList.remove("paused");
  document.querySelector("wolf_sprite2").classList.remove("zoom_out");
  document.querySelector("#wolf_container2").classList.remove("wolf2");
  document.querySelector("#wolf_container2").offsetWidth;
  document.querySelector("#wolf_container2").classList.add("wolf2");
  document.querySelector("#wolf_conatiner2").addEventListener("click", clickWolf2);
}

function clickDeer() {
    console.log("You shot a deer");
    document.querySelector("#deer_container").removeEventListener("click", clickDeer);
    document.querySelector("#deer_container").classList.add("paused");
    document.querySelector("#deer_sprite").classList.add("zoom_out");
    document.querySelector("#deer_container").addEventListener("End animation", deerRestart);
    decrementLives();

}

function clickDeer() {
  console.log("You shot deer 2");
  document.querySelector("#deer_container2").removeEventListener("click", clickDeer2);
  document.querySelector("#deer_container2").classList.add("paused");
  document.querySelector("#deer_sprite2").classList.add("zoom_out");
  document.querySelector("#deer_container2").addEventListener("End animation", deerRestart);
  decrementLives();
}

function deerRestart() {
    console.log("deer restarts");
    document.querySelector("deer_container").removeEventListener("End animation", deerRestart);
    document.querySelector("#deer_container").classList.remove("paused");
    document.querySelector("deer_sprite").classList.remove("zoom_out");
    document.querySelector("#deer_container").classList.remove("deer");
    document.querySelector("#deer_container").offsetWidth;
    document.querySelector("#deer_container").classList.add("deer");
    document.querySelector("#deer_container").addEventListener("click", clickKunde);
}

function deerRestart2() {
  console.log("deer restarts");
  document.querySelector("deer_container2").removeEventListener("End animation", deerRestart2);
  document.querySelector("#deer_container2").classList.remove("paused");
  document.querySelector("deer_sprite2").classList.remove("zoom_out");
  document.querySelector("#deer_container2").classList.remove("deer2");
  document.querySelector("#deer_container2").offsetWidth;
  document.querySelector("#deer_container2").classList.add("deer2");
  document.querySelector("#deer_container2").addEventListener("click", clickKunde2);
}

function incrementPoints() {
    console.log("you got 1 point");
    points++;
    displayIncrementPoints();
        if (points >= 10) {
            gameWon();
        }
}
function displayIncrementPoints() {
    document.querySelector("#point_count").textContent = points;
}

function decrementLives() {
    console.log("decrementLives");
    console.log("lives");
    displayDecrementLives();
    lives--;
    if (lives <= 0) {
        gameOver();
    }
}

function displayDecrementLives() {
    console.log("heart+lives");
    document.querySelector("#heart" + lives).classList.remove("active_heart");
    document.querySelector("#heart" + lives).classList.add("broken_heart");

}
function levelComplete() {
    console.log("No wolfs on sight");
    document.querySelector("#level_complete").classList.remove("hidden");
}

function gameOver() {
    console.log("Game Over");
    document.querySelector("#game_over").classList.remove("hidden");
}
