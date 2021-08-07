const obj = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14,
	fifteen: 15,
	sixteen: 16,
	seventeen: 17,
	eighteen: 18,
	nineteen: 19,
	twenty: 20,
	thirty: 30,
	forty: 40,
	fifty: 50,
	sixty: 60,
	seventy: 70,
	eighty: 80,
	ninety: 90,
	hundred: 100,
	thousand: 1000,
	million: 1000000
};

const parseInt = (str) => {
	let milli = 0;
	let sand = 0;

	return (
		str.split(/\sand\s|\s|-/).map((e) => obj[e]).reduce((a, c, i, arr) => {
			if (arr[i - 1] === 1000000) {
				milli = a;
				a = 0;
			}
			if (arr[i - 1] === 1000) {
				sand = a;
				a = 0;
			}
			if (c === 100 || c === 1000 || c === 1000000) a *= c;
			else a += c;
			return a;
		}, 0) +
		milli +
		sand
	);
};

const parseInt2 = (str) => {
	const nums = str.split(/\sand\s|\s|-/).map((e) => obj[e]);
	const million = nums.slice(0, nums.indexOf(1000000) + 1);
	const thousand = nums.slice(nums.indexOf(1000000) + 1, nums.indexOf(1000) + 1);
	const rest = nums.includes(1000) ? nums.slice(nums.indexOf(1000) + 1) : nums.slice(nums.indexOf(1000000) + 1);

	return reducer(million) + reducer(thousand) + reducer(rest);
};

const reducer = (arr) => {
	return arr.reduce((a, c) => {
		if (c === 100 || c === 1000 || c === 1000000) a *= c;
		else a += c;
		return a;
	}, 0);
};

console.log(parseInt('zero'));
console.log(parseInt('one million two hundred thousand five hundred'));
console.log(parseInt2('seven hundred eighty-three thousand nine hundred and nineteen'));

// numMap
// 	.set('zero', 0)
// 	.set('one', 1)
// 	.set('two', 2)
// 	.set('three', 3)
// 	.set('four', 4)
// 	.set('five', 5)
// 	.set('six', 6)
// 	.set('seven', 7)
// 	.set('eight', 8)
// 	.set('nine', 9)
// 	.set('ten', 10)
// 	.set('eleven', 11)
// 	.set('twelve', 12)
// 	.set('thirteen', 13)
// 	.set('fourteen', 14)
// 	.set('fifteen', 15)
// 	.set('sixteen', 16)
// 	.set('seventeen', 17)
// 	.set('eighteen', 18)
// 	.set('nineteen', 19)
// 	.set('twenty', 20)
// 	.set('thirty', 30)
// 	.set('forty', 40)
// 	.set('fifty', 50)
// 	.set('sixty', 60)
// 	.set('seventy', 70)
// 	.set('eighty', 80)
// 	.set('ninety', 90)
// 	.set('hundred', 100)
// 	.set('thousand', 1000)
// 	.set('million', 1000000);

// numMap
// 		.set('zero', '0')
// 		.set('one', '1')
// 		.set('two', '2')
// 		.set('three', '3')
// 		.set('four', '4')
// 		.set('five', '5')
// 		.set('six', '6')
// 		.set('seven', '7')
// 		.set('eight', '8')
// 		.set('nine', '9')
// 		.set('ten', '10')
// 		.set('eleven', '11')
// 		.set('twelve', '12')
// 		.set('thirteen', '13')
// 		.set('fourteen', '14')
// 		.set('fifteen', '15')
// 		.set('sixteen', '16')
// 		.set('seventeen', '17')
// 		.set('eighteen', '18')
// 		.set('nineteen', '19')
// 		.set('twenty', '20')
// 		.set('thirty', '30')
// 		.set('forty', '40')
// 		.set('fifty', '50')
// 		.set('sixty', '60')
// 		.set('seeventy', '70')
// 		.set('eighty', '80')
// 		.set('ninety', '90')
// 		.set('hundred', '100')
// 		.set('thousand', '1000')
// 		.set('million', '1000000');
