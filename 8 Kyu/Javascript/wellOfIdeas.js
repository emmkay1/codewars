const well = (x) => {
	const n = x.reduce((a, c) => a + (c === 'good'), 0);
	return n > 2 ? 'I smell a series!' : n >= 1 ? 'Publish!' : 'Fail!';
};
