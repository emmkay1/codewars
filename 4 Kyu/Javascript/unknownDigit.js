const solveExpression = (exp) => {
	const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].filter((e) => !exp.includes(`${e}`));
	const calc = (e, a, b) => (e === '+' ? +a + +b : e === '*' ? +a * +b : +a - +b);
	const r = (s, n) => s.replace(/\?/g, n);
	const opd = exp
		.split(/([-+*=])/g)
		.reduce((a, c) => {
			c == '-' ? a.push(c) : a[a.length - 1] == '-' && a[a.length - 2] == '' ? (a[a.length - 1] += c) : a.push(c);
			return a;
		}, [])
		.filter((e) => e !== '');

	for (let e of nums) if (`${calc(opd[1], r(opd[0], e), r(opd[2], e))}` === `${r(opd[4], e)}`) return e;
	return -1;
};

const solveExpression2 = (exp) => {
	let [ op, r ] = [ exp.replace('--', '+').split('='), (s, n) => s.replace(/\?/g, n) ];
	let nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ].filter((e) => !exp.includes(`${e}`));
	for (let e of nums) if (`${eval(r(op[0], e))}` === r(op[1], e)) return e;
	return -1;
};

console.log(solveExpression('1+1=?')); // 2
console.log(solveExpression('123*45?=5?088')); // 6
console.log(solveExpression('-5?*-1=5?')); // 0
console.log(solveExpression('19--45=5?')); // -1
console.log(solveExpression('??*??=302?')); // 5
console.log(solveExpression('?*11=??')); // 2
console.log(solveExpression('??*1=??')); // 2
console.log(solveExpression('??-??=??')); // -1
console.log(solveExpression('?20132-34141?=47?717')); // -1
console.log(solveExpression('?38???+595???=833444'));
// const nums = exp.match(/(\d*\?*|[-+*])*/g);
