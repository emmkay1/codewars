function fix(paragraph) {
	return paragraph.replace(/^\w|\.\s\w/g, (match) => match.toUpperCase());
}
