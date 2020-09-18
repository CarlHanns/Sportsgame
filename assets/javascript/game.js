const body = document.querySelector("body");
let resetCount = document.querySelector("#num-resets");
const resetButton = document.querySelector("#reset-button");

let shotsTeamOne = document.querySelector("#teamone-numshots");
let goalsTeamOne = document.querySelector("#teamone-numgoals");
const teamOneShootButton = document.querySelector("#teamone-shoot-button");

let shotsTeamTwo = document.querySelector("#teamtwo-numshots");
let goalsTeamTwo = document.querySelector("#teamtwo-numgoals");
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");

const fieldGoalPercent = 60;

let teamNameOne = document.querySelector("#teamOneName");
let teamNameTwo = document.querySelector("#teamTwoName");

teamNameOne.innerHTML = prompt("What is the name of Team One?");
teamNameTwo.innerHTML = prompt("What is the name of Team Two?");

teamOneShootButton.addEventListener("click", function () {
  shotsTeamOne.innerHTML++;
  const random = Math.floor(Math.random() * 101);
  console.log(random);
  if (random <= fieldGoalPercent) {
    goalsTeamOne.innerHTML++;
    alert("Jordan!!!!!!");
  } else {
    alert("Trash Bag");
  }
});

teamTwoShootButton.addEventListener("click", function () {
  shotsTeamTwo.innerHTML++;
  const random = Math.floor(Math.random() * 101);
  console.log(random);
  if (random <= fieldGoalPercent) {
    goalsTeamTwo.innerHTML++;
    alert("Jordan!!!!!!");
  } else {
    alert("Trash Bag");
  }
});

resetButton.addEventListener("click", function () {
  console.log("Reset button was clicked");
  resetCount.innerHTML++;
  shotsTeamOne.innerHTML = 0;
  shotsTeamTwo.innerHTML = 0;
  goalsTeamOne.innerHTML = 0;
  goalsTeamTwo.innerHTML = 0;
});

// sayHi();

// function sayHi() {
//   console.log("Hello");
//   alert("Hello");
// }

// const name = prompt("What is your name?");

// sayHi(name);

// function sayHi(name) {
//   console.log("Hello " + name);
//   alert("Hello " + name);
// }

// const red = Math.floor(Math.random() * 256);
// const blue = Math.floor(Math.random() * 256);
// const green = Math.floor(Math.random() * 256);
// body.style.backgroundColor = "rgb(" + red + ", " + blue + ", " + green + ")";

// const name = prompt("enter your name");
