import arrow from "./assets/img/arrow.png";
import "./main.scss";
import gallows from "./assets/img/gallows.jpg";
import head from "./assets/img/head.jpg";
import body from "./assets/img/body.jpg";
import leftArm from "./assets/img/left-arm.jpg";
import rightArm from "./assets/img/right-arm.jpg";
import leftLeg from "./assets/img/left-leg.jpg";
import rightLeg from "./assets/img/right-leg.jpg";
import { createMarkup } from "./assets/js/body-parts/layout";
createMarkup();
import { createButton } from "./assets/js/create-button";
import { randomizer } from "./assets/js/randomizer";
import { questionAnswer } from "./assets/js/question-answer";
import { bodyParts } from "./assets/js/body-parts/bodyparts";
import { createBodyPart } from "./assets/js/body-parts/create-body-part";

const question = document.querySelector(".question");
const word = document.querySelector(".word");
const buttons = document.querySelector(".buttons");
const buttonsBox = document.querySelectorAll(".buttons__btn");
const bodyElements = document.querySelectorAll(".body__part");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const restartGame = document.querySelector(".modal__button");
const incorrectCounter = document.querySelector(".incorrect-counter");
let overlayStatus = false;
const allowedKeys = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

function blockInput() {
  document.body.classList.add("scroll-hidden");
  overlay.classList.add("overlay_active");
  overlayStatus = true;
}

function unlockInput() {
  document.body.classList.remove("scroll-hidden");
  overlay.classList.remove("overlay_active");
  overlayStatus = false;
}

let correctLetters = 0;
let incorrectLetters = 0;
let usedLetter = [];
let randomNumber = randomizer(questionAnswer.length);
let prevNum = randomNumber;
let letters = document.querySelectorAll(".letter");
let answer = questionAnswer[randomNumber].answer;

function startGame() {
  word.innerHTML = "";

  //Reset if it's restart
  buttonsBox.forEach((el) => {
    if (el.classList[1] == "buttons__btn_activate") {
      el.classList.remove("buttons__btn_activate");
    }
  });
  bodyElements.forEach((el) => {
    el.classList.add("hidden");
  });
  incorrectCounter.innerHTML = incorrectLetters;
  if (incorrectCounter.classList[1] === "incorrect-counter_active") {
    incorrectCounter.classList.remove("incorrect-counter_active");
  }

  answer = questionAnswer[randomNumber].answer;
  question.innerHTML = questionAnswer[randomNumber].question;
  prevNum = randomNumber;

  for (let i = 0; i < answer.length; i++) {
    let letter = document.createElement("span");
    letter.classList.add("letter");
    letter.innerHTML = "_";
    word.append(letter);
  }

  letters = document.querySelectorAll(".letter");

  function showWinModal() {
    blockInput();
    modal.style.backgroundColor = "#00662a";
    setTimeout(() => {
      modal.children[0].textContent = "Congratulations!";
      modal.children[1].textContent = "You win!";
      modal.children[2].textContent = `The word: ${answer}`;
      modal.classList.remove("hidden__modal");
    }, 500);
  }

  function showLoseModal() {
    blockInput();
    modal.style.backgroundColor = "#a92a2a";
    setTimeout(() => {
      modal.children[0].textContent = "You lose :(";
      modal.children[1].textContent = "Better luck next time :) ";
      modal.children[2].textContent = `The word: ${answer}`;
      modal.classList.remove("hidden__modal");
    }, 500);
  }

  document.addEventListener("keydown", function (event) {
    if (!overlayStatus && allowedKeys.includes(event.key.toLowerCase())) {
      if (!usedLetter.includes(event.key.toLowerCase())) {
        buttonsBox.forEach((el) => {
          if (el.textContent.toLowerCase() === event.key.toLowerCase()) {
            el.classList.add("buttons__btn_activate");
          }
        });
        let found = false;
        answer
          .toLowerCase()
          .split("")
          .forEach((el, idx) => {
            if (el === event.key) {
              letters[idx].textContent = el.toUpperCase();
              correctLetters++;
              found = true;
              usedLetter.push(event.key.toLowerCase());
            } else if (
              idx === answer.length - 1 &&
              el !== event.key &&
              found === false
            ) {
              incorrectLetters++;
              let strCount = incorrectLetters.toString();
              incorrectCounter.innerHTML = strCount;
              incorrectCounter.classList.add("incorrect-counter_active");
              found = false;
              usedLetter.push(event.key.toLowerCase());
              bodyElements[incorrectLetters - 1].classList.remove("hidden");
            }
          });
      }
      if (correctLetters === answer.length) showWinModal();
      if (incorrectLetters === 6) showLoseModal();
    }
  });

  buttons.addEventListener("click", function (event) {
    if (
      !usedLetter.includes(event.target.innerHTML.toLowerCase()) &&
      event.target.classList.value == "buttons__btn"
    ) {
      //Change button color
      buttonsBox.forEach((el) => {
        if (
          el.textContent.toLowerCase() === event.target.innerHTML.toLowerCase()
        ) {
          el.classList.add("buttons__btn_activate");
        }
      });
      let found = false;
      answer
        .toLowerCase()
        .split("")
        .forEach((el, idx) => {
          if (el === event.target.innerHTML.toLowerCase()) {
            letters[idx].innerHTML = el.toUpperCase();
            correctLetters++;
            found = true;
            usedLetter.push(event.target.innerHTML.toLowerCase());
          } else if (
            idx === answer.length - 1 &&
            el !== event.target.innerHTML.toLowerCase() &&
            found === false
          ) {
            incorrectLetters++;
            let strCount = incorrectLetters.toString();
            incorrectCounter.innerHTML = strCount;
            incorrectCounter.classList.add("incorrect-counter_active");
            found = false;
            usedLetter.push(event.target.innerHTML.toLowerCase());
            bodyElements[incorrectLetters - 1].classList.remove("hidden");
          }
        });
    }
    if (correctLetters === answer.length) {
      showWinModal();
      correctLetters = 0;
    }

    if (incorrectLetters === 6) {
      showLoseModal();
      incorrectLetters = 0;
    }
  });
}

restartGame.addEventListener("click", () => {
  modal.classList.add("hidden__modal");
  unlockInput();
  correctLetters = 0;
  incorrectLetters = 0;
  usedLetter = [];

  randomNumber = randomizer(questionAnswer.length);
  if (prevNum === randomNumber) {
    randomNumber = randomizer(questionAnswer.length);
  }
  letters = document.querySelectorAll(".letter");
  startGame();
});

startGame();

//Better luck next time :)

//You won!
//You lose :(
// ТОлько чтобы на коавиатуре клавиши букав защитывались
