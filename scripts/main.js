'use strict';
let $ = require('jquery');
let userTotal = $('#user-total');
let finalTotal = $('#final-total');
let submitButton = $('#submit-button');
let state = $('select');
let states = {
	AL: '4.00',
	AK: '0',
	AZ: '5.60',
	AR: '6.50',
	CA: '7.50',
	CO: '2.90',
	CT: '6.35',
	DE: '0',
	DC: '5.75',
	FL: '6.00',
	GA: '4.00',
	HI: '4.00',
	ID: '6.00',
	IL: '6.25',
	IN: '7.00',
	IA: '6.00',
	KS: '6.15',
	KY: '6.00',
	LA: '4.00',
	ME: '5.50',
	MD: '6.00',
	MA: '6.25',
	MI: '6.00',
	MN: '6.875',
	MS: '7.00',
	MO: '4.225',
	MT: '0',
	NE: '5.50',
	NV: '6.85',
	NH: '0',
	NJ: '7.00',
	NM: '5.125',
	NY: '4.00',
	NC: '4.75',
	ND: '5.00',
	OH: '5.75',
	OK: '4.50',
	OR: '0',
	PA: '6.00',
	RI: '7.00',
	SC: '6.00',
	SD: '4.00',
	TN: '7.00',
	TX: '6.25',
	UT: '5.95',
	VT: '6.00',
	VA: '5.30',
	WA: '6.50',
	WV: '6.00',
	WI: '5.00',
	WY: '4.00'
}

function taxCalc(userTotal,state){
	let subTotal = parseFloat(userTotal)
	let tax = ((subTotal * parseFloat(states[state])) / 100);
	let total = (subTotal + tax).toFixed(2);
	finalTotal.html(`<div>SubTotal: ${subTotal} TaxAmount: ${tax} FinalTotal: ${total}</div>`)
};

$(document).ready(function(){
	submitButton.on('click', function(e){
		e.preventDefault();
		taxCalc(userTotal.val(), state.val())
	});
});







