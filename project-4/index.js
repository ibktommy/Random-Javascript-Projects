const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");

const secBtn = document.querySelector(".calc-s");
const pryBtn = document.querySelector(".calc");
const resetBtn = document.querySelector(".reset-btn");

const secResult = document.querySelector(".sec-result");
const result = document.querySelector(".result");

// Calculate Semi-Perimeter
function setVariables() {
	let a = parseFloat(num1.value);
	let b = parseFloat(num2.value);
	let c = parseFloat(num3.value);

	s = (a + b + c) / 2;
}

function areaOfTriangle() {
	let a = parseFloat(num1.value);
	let b = parseFloat(num2.value);
	let c = parseFloat(num3.value);
	s = parseFloat((a + b + c) / 2).toFixed(2);
}

secBtn.addEventListener("click", () => {
	if (num1.value === "" || num2.value === "" || num3.value === "") {
		secResult.textContent = "PLEASE INPUT ALL FIELDS";
		setTimeout(() => {
			secResult.textContent = "";
		}, 1500);
	} else if (num1.value != (num2.value || num3.value)) {
		secResult.textContent = "The value of the Triangle sides must be same!";
		setTimeout(() => {
			secResult.textContent = "";
		}, 2000);
	} else {
		areaOfTriangle();
		secResult.textContent = `The semi-perimeter of the Triangle is ${s}`;
	}
});

// Calculate the Area of the Triangle
pryBtn.addEventListener("click", () => {
	if (secResult.textContent === "") {
		result.textContent = 'PLEASE CALCULATE THE "S" VALUE FIRST';
		setTimeout(() => {
			result.textContent = "";
		}, 2000);
	} else {
		console.log(s);
		let a = parseFloat(num1.value);
		let b = parseFloat(num2.value);
		let c = parseFloat(num3.value);

		let areaVal = s * (s - a) * (s - b) * (s - c);
		console.log(areaVal);
		const areaOfTriangle = Math.sqrt(areaVal).toFixed(2);
		result.textContent = `The Area of the Triangle = ${areaOfTriangle}`;
	}
});

// Clear Input Fields
resetBtn.addEventListener("click", () => {
	num1.value = "";
	num2.value = "";
	num3.value = "";
});
