const calculate = (recs) => {
	return recs.reduce((a, [ x0, y0, x1, y1 ]) => a + (x1 - x0) * (y1 - y0), 0);
};

console.log(calculate([ [ 3, 3, 8, 5 ], [ 6, 3, 8, 9 ], [ 11, 6, 14, 12 ] ]));
