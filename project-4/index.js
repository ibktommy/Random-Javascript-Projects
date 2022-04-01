const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");

const secBtn = document.querySelector(".calc-s");
const pryBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset-btn");

const secResult = document.querySelector(".sec-result");
const result = document.querySelector(".result");

// Calculate Semi-Perimeter

secBtn.addEventListener("click", () => {
	if (num1.value === "" || num2.value === "" || num3.value === "") {
		secResult.textContent = "INPUT ALL FIELDS";
		setTimeout(() => {
			secResult.textContent = null;
		}, 1500);
	} else {
		let a = parseFloat(num1.value);
		let b = parseFloat(num2.value);
		let c = parseFloat(num3.value);

		const semiPerimeter = (a + b + c) / 2;

		secResult.textContent = `${semiPerimeter} is the Semi-Perimeter of the Triangle`;
	}
});
