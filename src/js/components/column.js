export const Column = (obj) => {
	const col = document.createElement("div");
	obj.classes.forEach((className) => {
		col.classList.add(className);
	});
	obj.children.forEach((child) => {
		col.append(child);
	});
	return col;
};
