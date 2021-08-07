const topThreeWords = (text) => {
	const [ freq, reg ] = [ {}, /\w+'?\w*/g ];
	const matches = text.toLowerCase().matchAll(reg);
	for (const match of matches) freq[match] ? freq[match]++ : (freq[match] = 1);
	return Object.keys(freq).sort((a, b) => freq[b] - freq[a]).slice(0, 3);
};

console.log(topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'));
console.log(topThreeWords("  //wont won't won't "));
console.log(topThreeWords(" ' "));
