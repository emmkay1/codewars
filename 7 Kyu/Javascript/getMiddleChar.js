function getMiddle(s) {
	const length = s.length / 2;
	const odd = Math.floor(length);
	return s.length % 2 === 0 ? s.slice(length - 1, length + 1) : s.slice(odd, odd + 1);
}
