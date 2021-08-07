function accum(s) {
	//return s.split('').map((e, i) => e.repeat(i + 1)).join('-').replace(/\b\w/g, (c) => c.toUpperCase());
	return s.split('').map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-');
}

console.log(accum('abcdR'));
