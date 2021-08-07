function List(...values) {
	for (let i = 0; i < values.length; i++) this[i] = values[i];
	this.length = values.length;
}

List.prototype.push = function(...elements) {
	for (let e of elements) this[this.length++] = e;
	return this.length;
};

List.prototype.pop = function() {
	let last = this[this.length === 0 ? -1 : --this.length];
	delete this[this.length];
	return last;
};

List.prototype.shift = function() {
	let first = this[0];
	for (let i = 1; i < this.length; i++) this[i - 1] = this[i];
	delete this[this.length !== 0 && --this.length];
	return first;
};

List.prototype.unshift = function(...elements) {
	for (let i = this.length + elements.length - 1; i >= elements.length; i--) this[i] = this[i - elements.length];
	for (let i = 0; i < elements.length; i++) (this[i] = elements[i]), this.length++;
	return this.length;
};

List.prototype.filter = function(callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) if (callback(this[i])) result.push(this[i]);
	return result;
};

let list = new List(1, 2, 3);
console.log(list);
console.log(list.unshift(4, 5));
console.log(list);

/* function List(...values) {
	for (let i = 0; i < values.length; i++) this[i] = values[i];
	this.length = Object.keys(this).length;
}

List.prototype.push = function(...elements) {
	let lastIndex = this.length === 0 ? 0 : +Object.keys(this).slice(-2, -1)[0] + 1;
	for (let i = 0; i < elements.length; i++) this[i + lastIndex] = elements[i];
	this.length = Object.keys(this).length - 1;
	return this.length;
};

List.prototype.pop = function() {
	if (this.length === 0) return undefined;
	let [ key, last ] = Object.entries(this).slice(-2, -1)[0];
	delete this[key];
	this.length--;
	return last;
};

List.prototype.shift = function() {
	if (this.length === 0) return undefined;
	let [ key, first ] = Object.entries(this).slice(0, 1)[0];
	delete this[key];
	let arr = Object.values(this).slice(0, -1);
	for (let i = 0; i < arr.length; i++) this[i] = arr[i];
	delete this[Object.keys(this).slice(-2, -1)[0]];
	this.length--;
	return first;
};

List.prototype.unshift = function(...elements) {
	let arr = [ ...elements, ...Object.values(this).slice(0, -1) ];
	for (let i = 0; i < arr.length; i++) this[i] = arr[i];
	this.length = Object.keys(this).length - 1;
	return this.length;
};

List.prototype.filter = function(func) {
	let result = [];
		for (let e of Object.values(this).slice(0, -1)) if (func(e)) result.push(e);
		return result;
}; */
