// function anagram(word, words) {
// 	const wordSorted = word.split('').sort();
// 	return words.filter((e) => e.split('').sort().every((_e, i, a) => a[i] === wordSorted[i]));
// }

function anagram(word, words) {
	const wordSorted = word.split('').sort().join('');
	return words.filter((e) => e.split('').sort().join('') === wordSorted);
}

console.log(anagram('abba', [ 'aabb', 'abcd', 'bbaa', 'dada', 'aaab' ]));
