function toWeirdCase(string) {
	return string
		.split(' ')
		.map((e) => {
			let str = '';
			for (let letter in e) {
				str = letter % 2 === 0 ? str.concat(e.charAt(letter).toUpperCase()) : str.concat(e.charAt(letter));
			}
			return str;
		})
		.join(' ');
}

console.log(toWeirdCase('This is a test'));
