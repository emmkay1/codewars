const rangeExtractor = (list) => {
	return list
		.reduce((a, c, i, arr) => {
			if (a.length === 0) a += c;
			else if ((c - arr[i - 1] === 1 && arr[i + 1] - c === 1) || (c - arr[i - 1] === 1 && c - arr[i - 2] === 2))
				a += `-${c}`;
			else a += `,${c}`;
			return a;
		}, '')
		.replace(/(-?\d+)(-{1,2}\d+)+(-{1,2}\d+)/g, '$1$3');
};

console.log(rangeExtractor([ 1, 2, 4, 5, 6, 8, 9 ]));
console.log(rangeExtractor([ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]));
console.log(rangeExtractor([ -78, -77, -76, -75, -72, -71, -70, -68, -66, -65, -62, -61, -58, -57, -54 ]));

// const rangeExtractor = (list) => {
// 	let str = '';
// 	let current = list[0];

// 	for (let i = 0; i < list.length; i++) {
// 		const next = list[i + 1];
// 		const prev = list[i - 1];
// 		const pre = list[i - 2];
// 		if (str.length === 0) str += `${current}`;
// 		else if ((current - prev === 1 && next - current === 1) || (current - prev === 1 && current - pre === 2))
// 			str += `-${current}`;
// 		else str += `,${current}`;
// 		current = next;
// 	}
// 	return str.replace(/(-?\d+)(-{1,2}\d+)+(-{1,2}\d+)/g, '$1$3');
// 	// return str
// 	// 	.split(',')
// 	// 	.map((e) => (e.split('-').filter((e) => e !== '').length === 2 ? e.split('-') : e))
// 	// 	.join(',')
// 	// 	.split(',')
// 	// 	.map((e) => e.match(/(^-?\d+)|(-*\d+$)/g).join(''))
// 	// 	.join(',');
// };
