// Set Variables
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const addBtn = document.querySelector(".add-btn");
const subtractBtn = document.querySelector(".subtract-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const divideBtn = document.querySelector(".divide-btn");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn");

// Add Number Function
function add(x, y) {
	return parseFloat(x) + parseFloat(y);
}
// Subtract Number Function
function subtract(x, y) {
	return parseFloat(x) - parseFloat(y);
}
// Multiply Number Function
function multiply(x, y) {
	return parseFloat(x) * parseFloat(y);
}
// Divide Number Function
function divide(x, y) {
	return parseFloat(x) / parseFloat(y);
}

// Add Btn
addBtn.addEventListener("click", () => {
	const answer = add(num1.value, num2.value);
	result.textContent = `'${num1.value}' + '${num2.value}' = ${answer}`;
});
// Subtract Btn
subtractBtn.addEventListener("click", () => {
	const answer = subtract(num1.value, num2.value);
	result.textContent = `'${num1.value}' - '${num2.value}' = ${answer}`;
});
// Multiply Btn
multiplyBtn.addEventListener("click", () => {
	const answer = multiply(num1.value, num2.value);
	result.textContent = `'${num1.value}' * '${num2.value}' = ${answer}`;
});
// Divide Btn
divideBtn.addEventListener("click", () => {
	const answer = divide(num1.value, num2.value).toFixed(1);
	result.textContent = `'${num1.value}' / '${num2.value}' = ${answer}`;
});

resetBtn.addEventListener("click", () => {
	num1.value = "";
	num2.value = "";
});
