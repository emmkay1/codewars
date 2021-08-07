const fac = (n) => (n ? fac(n - 1) * n : 1);

const expand = (expr) => {
	const [ _, a, a1, a2, b, n ] = expr.match(/\(((-?\d*)(\w))([+-]\d+)\)\^(\d+)/);
	if (n == 0) return '1';
	if (b == 0) return `${!/\d/.test(a1) ? a : Math.pow(a1, n) + a2}^${n}`;
	return Array.from({ length: Number(n) + 1 }, (x) => 0)
		.map((_, k) => {
			let [ c, pow ] = [ !/\d/.test(a1) ? a1 + 1 : a1, n - k ];
			let coef = fac(n) / (fac(k) * fac(n - k)) * Math.pow(c, pow) * Math.pow(b, k);
			let pos = Math.sign(coef) === 1;
			return pow >= 1 && (pos || !pos)
				? `${coef > 1 || coef < -1 ? `${pos && k > 0 ? `+${coef}` : coef}` : ''}${coef === -1
						? `-${a2}`
						: a2}${pow > 1 ? `^${pow}` : ''}`
				: `${pos ? `+${coef}` : coef}`;
		})
		.join('');
};

console.log(expand('(9t-0)^2'));
console.log(expand('(x+1)^1'));
console.log(expand('(p-1)^3'));
console.log(expand('(2f+4)^6'));
console.log(expand('(-2a-4)^0'));
console.log(expand('(-12t+43)^2'));
console.log(expand('(-e+11)^5'));
console.log(expand('(r+0)^203'));
console.log(expand('(-x-1)^2'));

// const expand = (expr) => {
// 	const [ _, a, a1, a2, b, n ] = expr.match(/\(((-?\d*)(\w))([+-]\d+)\)\^(\d+)/);
// 	if (n == 0) return '1';
// 	if (b == 0) return `${!/\d/.test(a1) ? a : Math.pow(a1, n) + a2}^${n}`;
// 	return Array.from({ length: Number(n) + 1 }, (x) => 0)
// 		.map((_, k) => {
// 			let [ c, pow ] = [ !/\d/.test(a1) ? a1 + 1 : a1, n - k ];
// 			let coef = fac(n) / (fac(k) * fac(n - k)) * Math.pow(c, pow) * Math.pow(b, k);
// 			let pos = Math.sign(coef) === 1;
// 			return coef === 1 || coef === -1
// 				? `${pow >= 1 ? `${coef === -1 ? `-${a2}` : a2}${pow > 1 ? `^${pow}` : ''}` : d ? `+${coef}` : coef}`
// 				: `${k !== 0 && d ? `+${coef}` : coef}${pow > 1 ? `${a2}^${pow}` : pow < 1 ? '' : `${a2}`}`;
// 		})
// 		.join('');
// };
