let score = "";
let calculation = "";
let operation = "";
function refreshScore() {
  document.querySelector(".result").textContent = score;
}

function resetScore() {
  score = "";
  operation = "";
}

//numbers buttons
document.querySelector(".num1").addEventListener("click", function () {
  score = score + "1";
  refreshScore();
});

document.querySelector(".num2").addEventListener("click", function () {
  score = score + "2";
  refreshScore();
});

document.querySelector(".num3").addEventListener("click", function () {
  score = score + "3";
  refreshScore();
});

document.querySelector(".num4").addEventListener("click", function () {
  score = score + "4";
  refreshScore();
});

document.querySelector(".num5").addEventListener("click", function () {
  score = score + "5";
  refreshScore();
});

document.querySelector(".num6").addEventListener("click", function () {
  score = score + "6";
  refreshScore();
});

document.querySelector(".num7").addEventListener("click", function () {
  score = score + "7";
  refreshScore();
});

document.querySelector(".num8").addEventListener("click", function () {
  score = score + "8";
  refreshScore();
});

document.querySelector(".num9").addEventListener("click", function () {
  score = score + "9";
  refreshScore();
});

document.querySelector(".num0").addEventListener("click", function () {
  score = score + "0";
  refreshScore();
});

document.querySelector(".reset").addEventListener("click", function () {
  resetScore();
  refreshScore();
});

document.querySelector(".inverse").addEventListener("click", function () {
  score = -score;
  refreshScore();
});

document.querySelector(".percentage").addEventListener("click", function () {
  score = Number(score) * 100;
  refreshScore();
});

document.querySelector(".comma").addEventListener("click", function () {
  score = score + ".";
  refreshScore();
});

document.addEventListener("keypress", function (event) {
  let calcInput = event.key;
  if (Number(calcInput) >= 0 && Number(calcInput) <= 9) {
    score = score + calcInput;
    refreshScore();
  }
});

const calculate = () => {
  if (operation === "add") {
    score = Number(part1) + Number(score);
    refreshScore();
  } else if (operation === "subtract") {
    score = Number(part1) - Number(score);
    refreshScore();
  } else if (operation === "multiply") {
    score = Number(part1) * Number(score);
    refreshScore();
  } else if (operation === "divide") {
    score = Number(part1) / Number(score);
    refreshScore();
  }
};

//action buttons
document.querySelector(".multiply").addEventListener("click", function () {
  multiply();
});

function multiply() {
  if (!operation) {
    part1 = Number(score);
    score = "";
  }
  operation = "multiply";
  refreshScore();
}

document.querySelector(".subtract").addEventListener("click", function () {
  subtract();
});

function subtract() {
  if (!operation) {
    part1 = Number(score);
    score = "";
  }
  operation = "subtract";
  refreshScore();
}

document.querySelector(".add").addEventListener("click", function () {
  add();
});

function add() {}
if (!operation) {
  part1 = Number(score);
  score = "";
}
operation = "add";
refreshScore();

document.querySelector(".divide").addEventListener("click", function () {
  divide();
});

function divide() {
  if (!operation) {
    part1 = Number(score);
    score = "";
  }
  operation = "divide";
  refreshScore();
}

document.querySelector(".calculate").addEventListener("click", function () {
  calculate();
});
