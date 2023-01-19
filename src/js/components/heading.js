export const Heading = (obj) => {
	const heading = document.createElement(`h${obj.type}`);
	heading.textContent = obj.content;
	obj.classes.forEach((className) => {
		heading.classList.add(className);
	});
	return heading;
};
