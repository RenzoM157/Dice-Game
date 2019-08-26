// Setting a random number for the first pic

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // generates random num from 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1-dice6.png

var randomImgSrc = "images/" + randomDiceImg; // /imges/dice1.png - /images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc);


// Setting a second random number for the second pic

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);


// Creating winner announcement

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "<em>🏆 Player 1 wins! 🏆<em>";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "<em>🏆 Player 2 wins! 🏆<em>";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
