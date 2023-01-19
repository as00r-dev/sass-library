export const Anchor = (obj) => {
	const a = document.createElement("a");
	a.textContent = obj.content;
	obj.classes.forEach((className) => {
		a.classList.add(className);
	});
	return a;
};
