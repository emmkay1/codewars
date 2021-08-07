function solve(arr) {
	return arr.filter((e, i, a) => !a.includes(-e))[0];
}
