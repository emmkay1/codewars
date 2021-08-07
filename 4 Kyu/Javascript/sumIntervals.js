const range = (x, y) => Array.from({ length: (x - y) / 1 + 1 }, (_, i) => y + i);

// const sumIntervals = (intervals) => {
// 	return intervals
// 		.sort((a, b) => b[1] - a[1])
// 		.reduce((a, c) => {
// 			let [ v, len ] = [ a.slice(-1)[0], a.length - 1 ];
// 			a.length === 0
// 				? a.push(c)
// 				: range(v[1], v[0]).includes(c[1]) ? (a[len][0] = Math.min(c[0], a[len][0])) : a.push(c);
// 			return a;
// 		}, [])
// 		.reduce((a, [ min, max ]) => a + max - min, 0);
// };

const sumIntervals = (intervals) => {
	return intervals
		.sort((a, b) => b[1] - a[1])
		.reduce((a, c, i) => {
			let [ v, len ] = [ a.slice(-1)[0], a.length - 1 ];
			i === 0 ? a.push(c) : c[1] <= v[1] && c[1] > v[0] ? (a[len][0] = Math.min(a[len][0], c[0])) : a.push(c);
			return a;
		}, [])
		.reduce((a, [ min, max ]) => a + max - min, 0);
};

console.log(sumIntervals([ [ 1, 2 ], [ 6, 10 ], [ 11, 15 ] ]));
console.log(sumIntervals([ [ 1, 5 ], [ 10, 20 ], [ 1, 6 ], [ 16, 19 ], [ 5, 11 ] ]));
console.log(sumIntervals([ [ 1, 4 ], [ 7, 10 ], [ 3, 5 ] ]));
console.log(
	sumIntervals([ [ 7, 225 ], [ 225, 343 ], [ 257, 358 ], [ -269, 491 ], [ -148, -77 ], [ 323, 491 ], [ 88, 457 ] ])
);
