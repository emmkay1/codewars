const snail = (arr) => {
	let s = [];
	let dir = 1;
	for (let i = 0; i < arr.length; i++) {
		for (let j = dir === 1 ? 0 : arr[i].length - 1; dir === 1 ? j < arr[i].length : j >= 0; dir === 1 ? j++ : j--) {
			console.log('outer: ', i, j);
			if (i === 0) {
				dir = 1;
				s.push(arr[i][j]);
				arr[i][j] = 0;
			} else if (j === arr[i].length - 1) {
				dir = -1;
				//j = j === 0 ? j + 1 : j - 1;
				s.push(arr[i][j]);
				arr[i][j] = 0;
			} else if (i === arr.length - 1 && j === 0) {
				console.log('Log: ', i, j);
				s.push(arr[i][j]);
				i--;
				j--;
				dir = 1;
				console.log(s);
			} else if (i === arr.length - 1) {
				//dir = -1;
				//console.log(i, j);
				s.push(arr[i][j]);
				arr[i][j] = 0;
			}
			//else if(j === 0 && )
		}
	}
	return s;
};

console.log(snail([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
