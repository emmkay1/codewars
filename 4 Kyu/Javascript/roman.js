const rToN = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//{ I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000 };
const ones = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ];
const tens = [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' ];
const hundreds = [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM' ];

function fromRoman(roman) {
	return roman.split('').reduce((a, c, i, arr) => (rToN[c] < rToN[arr[i + 1]] ? a - rToN[c] : a + rToN[c]), 0);
}

function toRoman(num) {
	let arr = num.toString().split('').map((e, i, a) => e.padEnd(a.length - i, '0'));
	return arr
		.map((e) => {
			if (e % 1000 === 0) return 'M'.repeat(e[0]);
			if (e.length === 3) return hundreds[e[0] - 1];
			if (e.length === 2) return tens[e[0] - 1];
			if (e.length === 1) return ones[e[0] - 1];
		})
		.join('');
}

function toRoman2(num) {
	return Object.keys(rToN).reduce((a, c, i) => {
		while (num >= rToN[c]) {
			a += c;
			num -= rToN[c];
		}
		return a;
	}, '');
}

console.log(fromRoman('MDCLXIX'));
console.log(fromRoman('MMVII'));
console.log(toRoman2(2020));
console.log(toRoman2(2020));
console.log(Object.keys(rToN));