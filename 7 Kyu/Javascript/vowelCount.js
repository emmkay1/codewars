function getCount(str) {
	const vowelsCount = str.match(/[aeiou]/g);
	return vowelsCount !== null ? vowelsCount.length : 0;
}

function getCount(str) {
	return str.split('').reduce((acc, cur) => {
		RegExp('[aeiou]', 'g').test(cur) && acc++;
		return acc;
	}, 0);
}
