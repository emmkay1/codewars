const save = (sizes, hd) => {
	let files = 0;
	for (files; files < sizes.length; files++) if (sizes.slice(0, files + 1).reduce((a, c) => a + c, 0) > hd) break;
	return files;
};

console.log(save([ 4, 4, 4, 3, 3 ], 12));
