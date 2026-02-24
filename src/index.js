import { API_KEY } from "./config.js";

// VULNERABILITY: innerHTML with user input
function displayMessage(userInput) {
  document.getElementById("output").innerHTML = userInput;
}

// Fixed: Safe math parser instead of eval
function calculate(expression) {
  try {
    // Sanitize input: only allow numbers and basic math operators
    const sanitized = expression.replace(/[^0-9+\-*/().]/g, '');
    if (sanitized !== expression) {
      return 'Invalid characters in expression';
    }
    // Use Function constructor with strict mode (safer than eval)
    return Function('"use strict"; return (' + sanitized + ')')();
  } catch (error) {
    return 'Invalid expression';
  }
}

// Wire up the poll form
document.getElementById("poll-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const response = document.getElementById("response").value;
  displayMessage(`You said: ${response}`);
});

document.getElementById("calc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const expr = document.getElementById("expression").value;
  const result = calculate(expr);
  document.getElementById("calc-result").textContent = result;
});
