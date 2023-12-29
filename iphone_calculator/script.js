let num = [ '', '' ];
let preOperation = '';
let nextNum = 0;

let numBut = document.querySelectorAll('.num');
const makeZero = document.querySelector('.zero-button');
const deleteOver = document.querySelector('.dele-button');
let numOpe = document.querySelectorAll('.operation');
let screen = document.getElementById('scre');

makeZero.addEventListener('click', function() {
	num[0] = num[1] = '';
	nextNum = 0;
	preOperation = '';
	screen.innerHTML = '0';
});

deleteOver.addEventListener('click', function() {
	if (num[nextNum].length > 1) {
		num[nextNum] = num[nextNum].substring(0, num[nextNum].length - 1);
		screen.innerHTML = num[nextNum];
	} else {
		num[nextNum] = '';
		screen.innerHTML = '0';
	}
});

for (let i = 0; i < numBut.length; i++) {
	numBut[i].addEventListener('click', function() {
		if (numBut[i].value === '0' && num[nextNum].length === 0) {
			screen.innerHTML = '0';
		} else {
			num[nextNum] += numBut[i].value;
			screen.innerHTML = num[nextNum];
		}
	});
}

function getAns(first, operate, second) {
	let num1 = Number(first);
	let num2 = Number(second);
	let ans = 0;

	if (operate === '*') ans = num1 * num2;
	else if (operate === '/') ans = num1 / num2;
	else if (operate === '+') ans = num1 + num2;
	else if (operate === '-') ans = num1 - num2;

	return String(ans);
}
for (let i = 0; i < numOpe.length; i++) {
	numOpe[i].addEventListener('click', function() {
		if (numOpe[i].value === '=' && nextNum === 0) {
			if (num[nextNum].length === 0) screen.innerHTML = '0';
			else screen.innerHTML = num[nextNum];
		} else if (numOpe[i].value === '=') {
			num[0] = getAns(num[0], preOperation, num[1]);
			num[1] = '';
			nextNum = 0;
			screen.innerHTML = num[0];
		} else if (nextNum === 0) {
			preOperation = numOpe[i].value;
			nextNum++;
		} else if (nextNum === 1) {
			num[0] = getAns(num[0], preOperation, num[1]);
			num[1] = '';
			preOperation = numOpe[i].value;
			nextNum = 1;
		}
	});
}
