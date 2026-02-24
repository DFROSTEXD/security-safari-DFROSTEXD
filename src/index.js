import { API_KEY } from "./config.js";

// Fixed: Use textContent instead of innerHTML to prevent XSS
function displayMessage(userInput) {
  document.getElementById("output").textContent = userInput;
}

// VULNERABILITY: eval with user input
function calculate(expression) {
  return eval(expression);
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
