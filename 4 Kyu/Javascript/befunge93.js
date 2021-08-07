const operation = (opr, a, b) =>
	opr === '+'
		? a + b
		: opr === '-'
			? b - a
			: opr === '*'
				? a * b
				: opr === '%'
					? a === 0 ? 0 : b % a
					: opr === '`' ? (b > a ? 1 : 0) : opr === '/' && a === 0 ? 0 : Math.floor(b / a);

const interpret = (code) => {
	let [ stack, output, dir, p, stop ] = [ [], '', 1, 0, false ];
	let init = code.split('\n').map((e) => e.split(''));
	while (!stop) {
		for (let i = 0; i < init.length; i++) {
			for (let j = 0; dir === 1 ? j < init[i].length : j >= 0; dir === 1 ? j++ : j--) {
				let [ a, len ] = [ init[i][j], stack.length ];
				console.log(init[i][j], stack, 'out: ', i, j);
				if (a === '^') [ i, j, dir ] = [ --i, --j, 1 ];
				else if (a === 'v') {
					//i++;
					//j = j === 0 ? j + 1 : j - 1;
					dir = 1;
					[ i, j ] = [ ++i, j === 0 ? ++j : --j ];
				} else if (a === '>') dir = 1;
				else if (a === '<') dir = -1;
				else if (a === '+' || a === '-' || a === '*' || a === '/' || a === '%' || a === '`') {
					let arr = stack.splice(-2, 2);
					stack.push(operation(a, arr[1], arr[0]));
				} else if (a === '"') p === 0 ? (p = 1) : (p = 0);
				else if (p === 1) stack.push(a.charCodeAt());
				else if (a === ' ' && i < init.length - 1 && init[i + 1][j] === '^') [ i, j ] = [ --i, --j ];
				else if (a === '.') {
					output += stack.splice(-1, 1)[0];
					//stack.pop();
				} else if (a === '_') stack.splice(-1, 1)[0] === 0 ? (dir = 1) : (dir = -1);
				else if (a === ':') {
					len === 0 ? stack.push(0, 0) : stack.push(stack.slice(-1)[0]);
					//if (i > 0 && i < init.length - 1 &&) {
					// i++;
					// j--;
					//}
				} else if (/\d/.test(init[i][j])) stack.push(parseInt(init[i][j]));
				else if (a === '$') stack.pop();
				else if (a === '\\') [ stack[len - 2], stack[len - 1] ] = [ stack[len - 1], stack[len - 2] ];
				else if (a === '#') dir === 1 ? ++j : --j;
				else if (a === 'g') {
					let [ y, x ] = stack.splice(-2, 2);
					//console.log(x, y, output);
					//remember to to change it back to 'stack.push(`${init[x][y]}`.charCodeAt())' if necessary
					y === init[i].length
						? ([ i, j, stop ] = [ init.length - 1, init[i].length - 1, true ])
						: stack.push(`${init[x][y]}`.charCodeAt());
				} else if (a === ',') output += String.fromCharCode(stack.splice(-1, 1)[0]);
				else if (a === '!') stack.splice(-1, 1)[0] === 0 ? stack.push(1) : stack.push(0);
				else if (init[i][j] === '@') [ i, j, stop ] = [ init.length - 1, init[i].length - 1, true ];
				else if (init[i][j] === ' ') continue;
			}
		}
	}
	return output.trim();
};

//console.log(interpret('>987v>.v\nv456<  :\n>321 ^ _@'));
console.log(interpret('>25*"!dlroW olleH":v\n                v:,_@\n                >  ^'));
// console.log(interpret('01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@'));
// console.log(interpret('08>:1-:v v *_$.@\n  ^    _$>\\:^'));
// console.log(interpret(':0g,:"~"`#@_1+0"Quines are Fun">_'));

// for (let i = 0; i < init.length; i++) {
// 	for (let j = 0; dir === 1 ? j < init[i].length : j >= 0; dir === 1 ? j++ : j--) {
// 		let a = init[i][j];
// 		//console.log(init[i][j], stack, 'out: ', i, j);
// 		if (init[i][j] === '^') {
// 			[ i, j, dir ] = [ --i, --j, 1 ];
// 			// i--;
// 			// j--;
// 			// dir = 1;
// 		} else if (init[i][j] === 'v') {
// 			[ i, j, dir ] = [ ++i, j === 0 ? ++j : --j, 1 ];
// 			// i++;
// 			// j = j === 0 ? ++j : --j;
// 			// dir = 1;
// 		} else if (init[i][j] === '>') dir = 1;
// 		else if (init[i][j] === '<') dir = -1;
// 		else if (a === '+' || a === '-' || a === '*' || a === '/' || a === '%' || a === '`') {
// 			let arr = stack.splice(-2, 2);
// 			stack.push(operation(init[i][j], arr[1], arr[0]));
// 		} else if (init[i][j] === ' ' && i < init.length - 1 && init[i + 1][j] === '^') {
// 			i--;
// 			j--;
// 		} else if (init[i][j] === '.') {
// 			output += stack[stack.length - 1];
// 			stack.pop();
// 		} else if (init[i][j] === '_') {
// 			stack.splice(-1, 1)[0] === 0 ? (dir = 1) : (dir = -1);
// 			//stack.pop();
// 		} else if (init[i][j] === ':') {
// 			stack.length === 0 ? stack.push(0) : stack.push(stack.slice(-1)[0]);
// 			// if (i > 0 && i < init.length - 1 &&) {
// 			// 	i++;
// 			// 	j--;
// 			// }
// 		} else if (init[i].indexOf(a) > init[i].indexOf('"') && init[i].indexOf(a) < init[i].lastIndexOf('"'))
// 			stack.push(a.charCodeAt());
// 		else if (/\d/.test(init[i][j])) stack.push(parseInt(init[i][j]));
// 		else if (a === '$') stack.pop();
// 		else if (a === '\\')
// 			[ stack[stack.length - 2], stack[stack.length - 1] ] = [
// 				stack[stack.length - 1],
// 				stack[stack.length - 2]
// 			];
// 		else if (a === ',') output += String.fromCharCode(stack.splice(-1, 1)[0]);
// 		else if (
// 			init[i][j] === '!' &&
// 			!(init[i].indexOf('!') > init[i].indexOf('"') && init[i].indexOf('!') < init[i].lastIndexOf('"'))
// 		)
// 			stack.splice(-1, 1)[0] === 0 ? stack.push(1) : stack.push(0);
// 		else if (init[i][j] === '@') {
// 			[ i, j ] = [ init.length - 1, init[i].length - 1 ];
// 			// j = init[i].length - 1;
// 			// i = init.length - 1;
// 		} else if (init[i][j] === ' ' || a === '"') continue;
// 	}
