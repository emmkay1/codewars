const ranks = [ -8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8 ];

/* class User {
	constructor() {
		this.rank = -8;
		this.progress = 0;
	}
	incProgress(rank) {
		const prog = ranks.indexOf(rank) - ranks.indexOf(this.rank);

		if (ranks.includes(rank)) {
			if (prog === 0) this.progress += 3;
			if (prog === -1) this.progress += 1;
			else this.progress += 10 * Math.pow(prog, 2);
		} else throw 'invalid range values';

		while (this.progress >= 100) {
			this.rank = ranks[ranks.indexOf(this.rank) + 1];
			this.progress -= 100;
		}

		if (this.rank === 8) this.progress = 0;
	}
} */

class User {
	constructor() {
		this.rank = -8;
		this.progress = 0;
	}
	incProgress(rank) {
		const rankDiff = ranks.indexOf(rank) - ranks.indexOf(this.rank);

		if (ranks.includes(rank)) {
			if (rankDiff === 0) this.progress += 3;
			if (rankDiff === -1) this.progress += 1;
			else this.progress += 10 * Math.pow(rankDiff, 2);
		} else throw 'invalid range values';

		this.rank = ranks[ranks.indexOf(this.rank) + Math.floor(this.progress / 100)];
		this.progress = this.rank === 8 ? 0 : this.progress % 100;
	}
}

let user = new User();

console.log(`Current Rank: ${user.rank}`);
console.log(`Current progress: ${user.progress}`);
user.incProgress(8);
console.log(`New Rank: ${user.rank}`);
console.log(`New progress: ${user.progress}`);
