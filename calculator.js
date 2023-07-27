let string = '';
const buttons = document.querySelectorAll('.button');
const clearButton = document.getElementById('clr');
const deleteButton = document.querySelector('.button.btn-del');
const inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = evaluateExpression(string);
      inputField.value = string;
    } else if (e.target === deleteButton) {
      string = deleteLastCharacter(string);
      inputField.value = string;
    } else {
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });
});

clearButton.addEventListener('click', function() {
  clearCalculator();
});

function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    console.log('Invalid expression');
    return '';
  }
}

function deleteLastCharacter(str) {
  return str.slice(0, -1);
}

function clearCalculator() {
  string = '';
  inputField.value = '';
}
