var maze = [ [ { x: 0, y: 0 }, { x: 1, y: 0 } ], [ { x: 0, y: 1 }, { x: 1, y: 1 } ] ];
maze.cell = function(x, y) {
	return this[y][x];
};
maze[0][0].south = maze.cell(0, 1);
maze[0][0].east = maze.cell(1, 0);
maze[0][1].west = maze.cell(0, 0);
maze[1][0].north = maze.cell(0, 0);
maze[1][0].east = maze.cell(1, 1);
maze[1][1].west = maze.cell(0, 1);

const findPath = (start, end) => {
	const equal = (a, b) => a.every((e, i) => e === b[i]);
	const pos = (obj) => Object.values(obj).slice(0, 2);
	let path = [];
	// for (let e of Object.values(start).slice(2)) {
	// 	if (equal(pos(start), pos(e))) continue;
	// 	if (equal(pos(end), pos(e))) {
	// 		path.push(e);
	// 		break;
	// 	}
	// }
	// let path = [];
	// for(let e of start)

	return Object.values(start);
};

console.log(findPath(maze[0][0], maze[1][1]));
