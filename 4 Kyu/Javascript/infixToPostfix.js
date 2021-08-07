const toPostfix = (infix) => {
	let [ output, stack, p ] = [ '', [], { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 } ];
	for (let e of infix) {
		let last = stack[stack.length - 1];
		if (!isNaN(e)) output += e;
		else if (e === '(' || stack.length === 0) stack.push(e);
		else if (p[e] > p[last]) stack.push(e);
		else if (e === ')') {
			while (stack.slice(-1)[0] !== '(') output += stack.pop();
			stack.pop();
		} else if (p[e] <= p[last] || last === '(') {
			while (p[e] <= p[stack.slice(-1)[0]]) output += stack.pop();
			stack.push(e);
		}
	}
	// while (stack.length > 0) output += stack.pop();
	return output + stack.reverse().join('');
};

console.log(toPostfix('2+7*5')); // Should return "275*+"
console.log(toPostfix('3*3/(7+1)')); // Should return "33*71+/"
console.log(toPostfix('5+(6-2)*9+3^(7-1)')); // Should return "562-9*+371-^+"
console.log(toPostfix('(1+(4+5+2)-3)+(6+8)')); // should return 145+2++3-68++
console.log(toPostfix('(1)'));
console.log(toPostfix('1^2^3'));
