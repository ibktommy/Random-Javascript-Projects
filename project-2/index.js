const number = document.querySelector("#num");
const btn = document.querySelector("button");
let result = document.querySelector(".result");

function squareRoot(x) {
	return Math.sqrt(x);
}

btn.addEventListener("click", function () {
	if (number.value === "") {
		result.textContent = "PLEASE INPUT A NUMBER!";
	} else {
		let answer = squareRoot(number.value).toFixed(1);
		result.textContent = `The Square root of '${number.value}' = ${answer}`;
	}
});
