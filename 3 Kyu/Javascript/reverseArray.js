const reverse = (arr) => {
	let result = [];
	for (let i = arr.length - 1; i >= 0; i--) result.push(arr[i]);
	return result;
};

const reverse2 = (a) => [ ...a ].map(a.pop, a);

const reverse3 = (a) => a.map((_, i, a) => a[a.length - 1 - i]);

console.log(reverse2([ 1, 2, 3 ]));
