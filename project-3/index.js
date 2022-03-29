// Set Variables
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const calcBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset-btn");
const result = document.querySelector(".result");

// Function To Calculate Area of Right-Angled Triangle
function areaTriangle(x, y) {
	return (x * y) / 2;
}

calcBtn.addEventListener("click", () => {
	if (num1.value === "" || num2.value === "") {
		result.textContent = "PLEASE INPUT ALL FIELD!";
		setTimeout(() => {
			result.textContent = "";
		}, 2000);
	} else {
		const base = num1.value;
		const height = num2.value;
		let area = areaTriangle(base, height);
		result.textContent = `${area} is the Area of the Triangle`;
	}
});

resetBtn.addEventListener("click", () => {
	num1.value = "";
	num2.value = "";
});
