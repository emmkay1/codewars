const liveNeighbour = (arr, x, y) => {
	let neighbours = [];
	for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, arr.length - 1); i++)
		for (let j = Math.max(0, y - 1); j <= Math.min(y + 1, arr[0].length - 1); j++)
			if (i !== x || j !== y) neighbours.push(arr[i][j]);
	return neighbours.filter((e) => e === 1).length;
};

const deepCopy = (original) => {
	let copy = [];
	if (typeof original !== 'object' || original === null) return original;
	for (let key in original) {
		let value = original[key];
		copy[key] = deepCopy(value);
	}
	return copy;
};

const fillZeros = (arr, len) => {
	const zeros = (l) => Array.from({ length: l }, (x) => 0);
	arr.map((e) => {
		e.unshift(...zeros(len));
		e.push(...zeros(len));
		return e;
	});
	for (let i = 0; i < Math.floor(len / 2); i++) {
		arr.push(zeros(arr[0].length));
		arr.unshift(zeros(arr[0].length));
	}
	return arr;
};

const gameOfLife = (cells, generations) => {
	let arr = fillZeros(deepCopy(cells), generations);

	for (let i = 0; i < generations; i++) {
		arr = arr.map((e, i) =>
			e.map((e, j) => {
				if ((e === 1 && liveNeighbour(arr, i, j) === 2) || liveNeighbour(arr, i, j) === 3) return 1;
				if (e === 0 && liveNeighbour(arr, i, j) === 3) return 1;
				else return 0;
			})
		);
	}
	const finalCells = arr.reduce(
		(a, c, i) => {
			if (c.includes(1)) {
				a[0].push(i);
				a[1].push(c.indexOf(1), c.lastIndexOf(1));
			}
			return a;
		},
		[ [], [] ]
	);

	return arr
		.slice(Math.min(...finalCells[0]), Math.max(...finalCells[0]) + 1)
		.map((e) => e.slice(Math.min(...finalCells[1]), Math.max(...finalCells[1]) + 1));
};

let a = [ [ 1, 0, 0 ], [ 0, 1, 1 ], [ 1, 1, 0 ] ];

console.log(gameOfLife(a, 2));

// const mooreNeighbour2 = (a) => {
// 	let obj = {};
// 	let arr = a.map((e) => {
// 		e.unshift(2);
// 		e.push(2);
// 		return e;
// 	});
// 	arr.push(Array.from({ length: arr[0].length }, (x) => 2));
// 	arr.unshift(Array.from({ length: arr[0].length }, (x) => 2));

// 	for (let i = 1; i < arr.length - 1; i++) {
// 		for (let j = 1; j < arr[i].length - 1; j++) {
// 			obj[`${i - 1} - ${j - 1}`] = [
// 				arr[i - 1][j],
// 				arr[i - 1][j - 1],
// 				arr[i - 1][j + 1],
// 				arr[i][j - 1],
// 				arr[i][j + 1],
// 				arr[i + 1][j - 1],
// 				arr[i + 1][j],
// 				arr[i + 1][j + 1]
// 			];
// 		}
// 	}

// 	return obj;
// };
