export const Anchor = (obj) => {
	const a = document.createElement("anchor");
	a.textContent = obj.content;
	obj.classes.forEach((className) => {
		a.classList.add(className);
	});
	return a;
};
