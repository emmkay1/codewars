function findScreenHeight(width, ratio) {
	const nums = ratio.split(':');
	return `${width}x${nums[1] * width / nums[0]}`;
}

console.log(findScreenHeight(1280, '16:9'));
