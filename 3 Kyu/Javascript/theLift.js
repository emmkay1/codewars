const theLift = (queues, capacity) => {
	let floors = [];
	let lift = [];

	for (let i = 0; i < queues.length; i++) {
		for (let j = 0; j < queues[i].length; j++) {
			if (i === 0) {
				lift.push(...queues[0]);
				floors.push(0);
			} else if (lift.includes(i)) {
				lift = lift.filter((e) => e !== i);
				floors.push(i);
			}
		}
	}
};

var queues = [
	[], // G
	[], // 1
	[ 5, 5, 5 ], // 2
	[], // 3
	[], // 4
	[], // 5
	[] // 6
];

console.log(theLift(queues, 5));
