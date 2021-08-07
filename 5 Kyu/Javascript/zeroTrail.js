// const zeros = (n) => {
// 	const len = Math.floor(Math.log(n) / Math.log(5));
// 	let ans = 0;
// 	for (let i = 1; i <= len; i++) ans += Math.floor(n / Math.pow(5, i));
// 	return ans;
// };

const zeros = (n) => {
	const len = Math.floor(Math.log(n) / Math.log(5));
	return Array.from({ length: len }, (_v, i) => ++i).reduce((a, c) => (a += Math.floor(n / Math.pow(5, c))), 0);
};

console.log(zeros(1000000000000));
