function Interpreter() {
	this.lets = {};
	this.functions = {};
}

Interpreter.prototype.tokenize = function(program) {
	if (program === '') return [];

	let regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
	return program.split(regex).filter(function(s) {
		return !s.match(/^\s*$/);
	});
};

Interpreter.prototype.input = function(expr) {
	let tokens = this.tokenize(expr);
	console.log(tokens);
};

let interpreter = new Interpreter();

// Basic arithmetic
console.log('Got: ', interpreter.input('1 + 1'), ' Expected: ', 2);
console.log('Got: ', interpreter.input('2 - 1'), ' Expected: ', 1);
console.log('Got: ', interpreter.input('2 * 3'), ' Expected: ', 6);
console.log('Got: ', interpreter.input('8 / 4'), ' Expected: ', 2);
console.log('Got: ', interpreter.input('7 % 4'), ' Expected: ', 3);

//variables
console.log('Got: ', interpreter.input('x = 1'), ' Expected: ', 1);
console.log('Got: ', interpreter.input('x'), ' Expected: ', 1);
console.log('Got: ', interpreter.input('x + 3'), ' Expected: ', 4);
