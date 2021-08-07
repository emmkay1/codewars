function evenOrOdd(str) {
	let [ even, odd ] = str.split('').reduce((a, c) => {
		c % 2 === 0 ? (a[0] += +c) : (a[1] += +c);
		return a;
	}, [ 0, 0 ]);
	return even === odd
		? 'Even and Odd are the same'
		: even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even';
}

function evenOrOdd(str) {
	let [ even, odd ] = str.split('').reduce((a, c) => {
		c % 2 === 0 ? (a[0] += +c) : (a[1] += +c);
		return a;
	}, [ 0, 0 ]);
	let [ greater, less ] = [ even > odd ? 'Even' : 'Odd', even < odd ? 'Even' : 'Odd' ];
	return even === odd ? 'Even and Odd are the same' : `${greater} is greater than ${less}`;
}
