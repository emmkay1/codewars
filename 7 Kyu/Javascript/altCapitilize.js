function capitalize(s) {
	return [
		s.replace(/\w/g, (c, i) => (i % 2 === 0 ? c.toUpperCase() : c)),
		s.replace(/\w/g, (c, i) => (i % 2 !== 0 ? c.toUpperCase() : c))
	];
}

console.log(capitalize('codewars'));
console.log(capitalize('abracadabra'));
