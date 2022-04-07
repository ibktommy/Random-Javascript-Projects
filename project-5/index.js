const number = document.querySelector("#num");
const btn = document.querySelector("button");
let result = document.querySelector(".result");

function kilometersToMiles(x) {
	let factor = 0.621371;
	const miles = x * factor;
	return miles;
}

btn.addEventListener("click", function () {
	if (number.value === "") {
		result.textContent = "PLEASE INPUT A NUMBER!";
	} else {
		let answer = kilometersToMiles(number.value).toFixed(3);
		result.textContent = `${number.value}kilometers = ${answer}miles`;
	}
});
