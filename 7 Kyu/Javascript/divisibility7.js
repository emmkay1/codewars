function divisible7(m, steps = 0) {
	const num = m.toString();
	return num.length < 3 ? [ m, steps ] : divisible7(num.slice(0, -1) - 2 * num.slice(-1), steps + 1);
}
console.log(divisible7(1325278));

// Another way to calculate the length of a number -> const len = Math.ceil(Math.log10(m + 1));
