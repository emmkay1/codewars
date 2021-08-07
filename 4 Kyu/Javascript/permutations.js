// const fac = (n) => (n ? fac(n - 1) * n : 1);

const permutations = (str, k = 0, arr = [], c = 0) => {
	if (str.length === 1) return str;
	//console.log(c, 'count');
	const s = arr.length > 0 ? (k > str.length - 1 ? arr[c++].split('') : arr.slice(-1)[0].split('')) : str.split('');
	const l = s[0];
	console.log(' Log', arr, k);
	for (let i = 0; i < str.length - 1; i++) {
		s.splice(i, 1);
		s.splice(i + 1, 0, l);
		!arr.includes(s.join('')) && arr.push(s.join(''));
	}
	return c > arr.length - 1 ? [ arr, k ] : permutations(str, k + 1, arr, c);
};

const perm = (str, c = 0, arr = []) => {
	const s = str.split('');
	if (c === s.length) !arr.includes(s.join('')) && arr.push(s.join(''));
	for (let i = c; i < s.length; i++) {
		[ s[c], s[i] ] = [ s[i], s[c] ];
		perm(s.join(''), c + 1, arr);
		[ s[c], s[i] ] = [ s[i], s[c] ];
	}
	return arr;
};

console.log(perm('123'));

// const permutations2 = (str, cur = 0, arr = []) => {
// 	let s = arr.length > 0 ? arr[arr.length - 1].split('') : str.split('');
// 	console.log(' Log', arr, cur);
// 	for (let i = 0; i < str.length - 1; i++) {
// 		s.splice(i, 1);
// 		s.splice(i + 1, 0, str[cur]);
// 		!arr.includes(s.join('')) && arr.push(s.join(''));
// 	}
// 	let n = [ ...new Set(arr) ];
// 	return cur > str.length - 2 ? arr : permutations2(str, cur + 1, arr);
// };
//console.log(permutations2('abcdef'));
