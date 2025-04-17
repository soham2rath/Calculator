let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");
let string = "";
let tr = true;

function checkPar(str) {
  let countOpen = (str.match(/\(/g) || []).length; // count the number of opening parentheses
  let countClose = (str.match(/\)/g) || []).length; // count the number of closing parentheses

  if (countOpen > countClose) {
    // add closing parentheses until there are the same amount of opening and closing parentheses
    for (let i = 0; i < countOpen - countClose; i++) {
      str += ')';
    }
  } else if (countOpen < countClose) {
    // remove excess closing parentheses
    str = str.substring(0, str.length - (countClose - countOpen));
  }

  return str;
}
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      string = checkPar(string)
      string = eval(string)
      screen.value = string
    } else if (e.target.innerHTML === "AC") {
      string = "";
      screen.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1);
      screen.value = string;
    } else if (e.target.innerHTML === "o") {
      window.open("calculator.html", "_self")
    } else if (e.target.innerHTML === "√") {
      string += "Math.sqrt(";
      screen.value = string;
    } else if (e.target.innerHTML === "π") {
      string += "Math.PI";
      screen.value = string;
    } else if (e.target.innerHTML === "cos") {
      string += e.target.innerHTML;
      screen.value = string;
    } else {
      string += e.target.innerHTML;
      screen.value = string;
    }
  });
});
