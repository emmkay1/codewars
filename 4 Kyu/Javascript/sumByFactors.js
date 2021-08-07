const isPrime = (n) => {
	for (let i = 2; i <= Math.sqrt(Math.abs(n)); i++) if (n % i === 0) return false;
	return Math.abs(n) > 1;
};

const primeFactors = (n, i = 2, arr = []) => {
	if (n === 1) return arr;
	if (isPrime(n)) arr.push(n);
	else {
		if (isPrime(i) && n % i === 0) {
			arr.push(i);
			primeFactors(n / i, i, arr);
		} else primeFactors(n, i + 1, arr);
	}
	return arr;
};

const sumOfDivided = (lst) => {
	const factors = lst
		.reduce((a, c) => [ ...new Set([ ...a, ...primeFactors(Math.abs(c)) ]) ], [])
		.sort((a, b) => a - b);
	return factors.map((e) => [ e, lst.reduce((a, c) => a + (c % e ? 0 : c), 0) ]);
};

console.log(sumOfDivided([ 15, 21, 24, 30, -45 ]));
console.log(sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100 ]));
console.log(
	sumOfDivided([
		84,
		-34,
		159,
		60,
		-13,
		-1,
		1,
		-54,
		112,
		47,
		27,
		170,
		97,
		109,
		85,
		70,
		-61,
		-100,
		157,
		90,
		-44,
		107,
		-88,
		177
	])
);
