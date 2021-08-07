function capitalize(s, arr) {
	//return s.split('').map((e, i, a) => (arr.includes(a.indexOf(e, i)) ? e.toUpperCase() : e)).join('');
	return s.replace(/\w/g, (c, i) => (arr.includes(i) ? c.toUpperCase() : c));
}

console.log(capitalize('codewars', [ 1, 3, 5, 50 ]));
console.log(capitalize('abracadabra', [ 2, 6, 9, 10 ]));
