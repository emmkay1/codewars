const smaller = (arr) => arr.map((e, i, a) => a.slice(i + 1).filter((j) => e > j).length);

console.log(smaller([ 5, 4, 3, 2, 1 ]));
console.log(smaller([ 1, 2, 3 ]));
console.log(smaller([ 1, 2, 0 ]));
console.log(smaller([ 1, 2, 1 ]));
console.log(smaller([ 1, 1, -1, 0, 0 ]));
console.log(smaller([ 5, 4, 7, 9, 2, 4, 4, 5, 6 ]));
