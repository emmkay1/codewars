const fac = (n) => (n ? fac(n - 1) * n : 1);

const count = (word) => {
	return word.split('').reduce((a, c) => {
		a[c] ? a[c]++ : (a[c] = 1);
		return a;
	}, {});
};

const listPosition = (word) => {
	let [ sorted, len, obj ] = [ word.split('').sort(), word.length, count(word) ];
	return word.split('').reduce((a, c, i) => {
		a += fac(len - i - 1) / Object.values(obj).reduce((x, y) => x * fac(y), 1) * sorted.indexOf(c);
		obj[c]--;
		sorted.splice(sorted.indexOf(c), 1);
		return a;
	}, 1);
};

console.log(listPosition('ABAB'));
