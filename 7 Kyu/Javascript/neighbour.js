function get_neighbourhood(type, arr, coordinates) {
	const [ [ x, y ], row, col ] = [ coordinates, arr.length - 1, arr[0].length - 1 ];
	const [ n, s, w, e ] = [ x - 1, x + 1, y - 1, y + 1 ];

	if (x < 0 || x > row || y > col) return [];

	let obj = {
		moore() {
			let neighbours = [];
			for (let i = Math.max(0, n); i <= Math.min(s, row); i++)
				for (let j = Math.max(0, w); j <= Math.min(e, col); j++)
					if (i !== x || j !== y) neighbours.push(arr[i][j]);
			return neighbours;
		},
		von_neumann() {
			const [ north, south, west, east ] = [
				n < 0 ? null : arr[n][y],
				s > row ? null : arr[s][y],
				w < 0 ? null : arr[x][w],
				e > col ? null : arr[x][e]
			];
			return [ north, south, west, east ].filter((e) => e !== null);
		}
	};
	return obj[type]();
}

let matrix = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ];
let mat = [
	[ 91, 94, 52, 27, 8, 28, 92, 70, 32, 96 ],
	[ 16, 86, 96, 23, 33, 59, 20, 12, 86, 89 ],
	[ 65, 26, 24, 55, 65, 34, 79, 38, 50, 94 ],
	[ 81, 65, 8, 77, 80, 69, 8, 79, 21, 44 ],
	[ 63, 34, 7, 32, 83, 27, 71, 4, 7, 90 ],
	[ 48, 38, 88, 84, 80, 29, 80, 77, 19, 20 ],
	[ 61, 98, 85, 28, 97, 73, 57, 69, 52, 30 ],
	[ 85, 58, 16, 84, 77, 48, 55, 58, 59, 60 ],
	[ 74, 33, 78, 39, 72, 9, 92, 81, 74, 91 ],
	[ 20, 1, 43, 73, 48, 74, 62, 1, 74, 85 ]
];
console.log(get_neighbourhood('moore', matrix, [ 0, 0 ]));
