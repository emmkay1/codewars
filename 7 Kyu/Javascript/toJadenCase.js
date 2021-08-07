String.prototype.toJadenCase = function() {
	return this.replace(/^\w|\s\w/g, (c) => c.toUpperCase());
};
