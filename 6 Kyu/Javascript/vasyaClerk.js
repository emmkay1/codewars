const tickets = (peopleInLine) => {
	const n = [];
	let str = 'YES';
	if (peopleInLine[0] !== 25) return 'NO';
	for (let i = 0; i < peopleInLine.length; i++) {
		if (peopleInLine[i] === 25) {
			n.push(25);
		} else if (peopleInLine[i] === 50 && n.includes(25)) {
			n.push(50);
			n.splice(n.indexOf(25), 1);
		} else if (peopleInLine[i] === 100 && n.includes(25) && n.includes(50)) {
			n.push(100);
			n.splice(n.indexOf(25), 1);
			n.splice(n.indexOf(50), 1);
		} else if (peopleInLine[i] === 100 && n.filter((e) => e === 25).length >= 3) {
			n.push(100);
			n.splice(n.indexOf(25), 3);
		} else str = 'NO';
	}
	return str;
};

console.log(tickets([ 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100 ]));
console.log(tickets([ 25, 100 ]));
console.log(tickets([ 25, 25, 50, 50, 100 ]));
console.log(tickets([ 25, 50, 100, 25, 25, 25, 50 ]));
console.log(tickets([ 50, 25, 100 ]));
console.log(tickets([ 25, 25, 25, 100 ]));
