const sieve = (n) => {
	let arr = [];
	next: for (let i = 2; i <= n; i++) {
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) continue next;
		}
		arr.push(i);
	}
	return arr;
};

console.log(sieve(10000000));

// const isPrime = (n) => {
// 	for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) if (n % i === 0) return false;
// 	return n > 1;
// };
// const sieve = (n) => {
// 	let arr = Array.from({ length: n }, (_, x) => ++x).filter((x) => x !== 1);
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[j] % arr[i] === 0) arr.splice(j, 1);
// 		}
// 	}
// 	return arr;
// };

// class Primes {
//   static * stream() {
//     for(let i = 2; i < Infinity; i++) if(isPrime(i)) yield(i);
//   }
// }
