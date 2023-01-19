export const Button = (obj) => {
	const btn = document.createElement("button");
	btn.textContent = obj.content;
	obj.classes.forEach((className) => {
		btn.classList.add(className);
	});
	return btn;
};
