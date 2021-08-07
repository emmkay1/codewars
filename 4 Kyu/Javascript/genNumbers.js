console.time('log');
const [ nums, sum ] = [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], (n) => n.reduce((a, c) => a + +c, 0) ];

const findAll = (n, r, comb = [], k = 0, res = []) => {
	if (comb.length === r) {
		sum(comb) === n && res.push(Array.from({ length: r }, (_, i) => comb[i]));
		return;
	}
	for (let i = k; i < nums.length; i++) {
		comb.push(nums[i]);
		findAll(n, r, comb, i, res);
		comb.pop();
	}
	return res.length > 0 ? [ res.length, res.slice(0, 1)[0].join(''), res.slice(-1)[0].join('') ] : [];
};

console.log(findAll(10, 3));
console.log(findAll(27, 3));
console.log(findAll(84, 4));
console.log(findAll(35, 6));

console.timeEnd('log');

/* const getPerms = (array, size) => {
	const p = (t, i) => {
		if (t.length === size) {
			result.push(t);
			return;
		}
		if (i + 1 > array.length) return;
		p(t.concat(array[i]), i + 1);
		p(t, i + 1);
	};

	let result = [];
	p([], 0);
	return result;
}; */

/* // Other solution. But its slow!
const sum = (n) => n.reduce((a, c) => a + +c, 0);
const findAll = (n, k, s = '', comb = []) => {
	const [ nums, sum ] = [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], (n) => n.reduce((a, c) => a + +c, 0) ];
	if (s.length >= k) !comb.includes(s.split('').sort().join('')) && sum(s.split('')) === n && comb.push(s);
	else for (let e of nums) findAll(n, k, s + e, comb);
	return comb.length > 0 ? [ comb.length, comb.slice(0, 1)[0], comb.slice(-1)[0] ] : [];
}; */
