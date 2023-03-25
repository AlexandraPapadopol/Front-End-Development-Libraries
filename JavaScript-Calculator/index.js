let trailingResult = 0;

let operationOptions = ['divide', 'multiply', 'subtract', 'add'];

let workingOperation = "";

function updateDisplay(input) {

  let display = document.getElementById("display");

  let secondaryDisplay = document.getElementById("secondaryDisplay");

  if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {

    if (input === "decimal") {

      display.innerHTML = "0.";

    } else if (input === "negative-value") {

      if (display.innerHTML.indexOf("-1") === -1) {

        display.innerHTML = "-" + display.innerHTML

      } else if (display.innerHTML.indexOf("-1" > -1)) {

        display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);

      }

    } else {

      display.innerHTML = input;

    }

  } else if (operationOptions.indexOf(input) >= 0) {

    console.log("Dealing with a operation");

    if (trailingResult === display.innerHTML) {

      workingOperation = input;

    } else if (workingOperation === "") {

      workingOperation = input;

      trailingResult = display.innerHTML;

      secondaryDisplay.innerHTML = trailingResult;

      display.innerHTML = 0;

    } else {

      trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);

      secondaryDisplay.innerHTML = trailingResult;

      display.innerHTML = 0;

      workingOperation = input;

    }

  } else if (input === "equals") {

    display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);

    trailingResult = 0;

    workingOperation = "";

    secondaryDisplay.innerHTML = trailingResult;

  } else if (input === "decimal") {

    console.log('Decimal clicked!');

    if (display.innerHTML.indexOf(".") === -1) {

      display.innerHTML += ".";

    }

    console.log("Decimal was skipped because it already is in the number!");

  } else if (input === "negative-value") {

    console.log("Negative-value selected!");

    if (display.innerHTML.indexOf("-1") === -1) {

      display.innerHTML = "-" + display.innerHTML

    } else if (display.innerHTML.indexOf("-1" > -1)) {

      display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);

    }

  } else {

    display.innerHTML += input;

  }

function clearDisplay() {

  let display = document.getElementById("display");

  let secondaryDisplay = document.getElementById("secondaryDisplay");

  trailingResult = 0;

  display.innerHTML = 0;

  secondaryDisplay.innerHTML = trailingResult;

}

function calculate(firstNumber, secondNumber, operation) {

  let result;

  firstNumber = parseFloat(firstNumber);

  secondNumber = parseFloat(secondNumber);

  switch(operation) {

    case "add":

      console.log("Sum calculated!")

      result = firstNumber + secondNumber;

      break;

    case "subtract":

      console.log("Subtraction calculated!")

      result = firstNumber - secondNumber;

      break;

    case "multiply":

      console.log("Multiplication calculated!")

      result = firstNumber * secondNumber;

      break;

    case "divide":

      console.log("Division calculated!")

      result = firstNumber / secondNumber;

      break;

    default:

      console.log("Calculate switch statement missed something");

  }

  return result.toString();

}