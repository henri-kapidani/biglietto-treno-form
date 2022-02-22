// DOM elements
let inputName = document.querySelector('#name');
let inputKm = document.querySelector('#count-km');
let inputAge = document.querySelector('#select-age');
let outputArea = document.getElementById('output');

let btnGenerate = document.querySelector('#generate');
let btnClear = document.querySelector('#clear');

// Constants
const costKm = 0.21;
const discountMinors = 20;
const discountElders = 40;

// Event listeners
btnGenerate.addEventListener('click', function() {
	let userName = inputName.value;
	let countKm = parseFloat(inputKm.value);
	let age = inputAge.value;

	if (isNaN(countKm)) {
		alert('Devi inserire numeri');
	} else {
		let discount;
		if (age == 'minorenne') {
			discount = discountMinors;
		} else if (age == 'senior') {
			discount = discountElders;
		} else {
			discount = 0;
		}

		let price = countKm * costKm;
		let discountValue = price * discount / 100;
		price = (price - discountValue).toFixed(2);

		outputArea.innerHTML = `${userName}, il prezzo del tuo biglietto è: ${price}€`;
	}
});

btnClear.addEventListener('click', function() {
	inputName.value = '';
	inputKm.value = '';
	inputAge.value = '';
	outputArea.innerHTML = '';
});
