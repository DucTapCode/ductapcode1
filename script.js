let result = document.querySelector(".result");
let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  result.innerText = currentNumber;
}

function appendOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
  result.innerText = "";
}

function calculate() {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  let answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "x": // Đã sửa từ "*" thành "x"
      answer = num1 * num2;
      break;
    case "÷": // Đã sửa từ "/" thành "÷"
      answer = num1 / num2;
      break;
    default:
        answer = currentNumber;     
  }

  result.innerText = answer;
  currentNumber = answer.toString(); // Đã sửa từ currentNumber = answer;
  previousNumber = "";
  operator = "";
}
