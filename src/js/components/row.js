export const Row = (obj) => {
	const row = document.createElement("div");
	row.classList.add("row");
	obj.classes.forEach((className) => {
		row.classList.add(className);
	});
	obj.children.forEach((child) => {
		row.append(child);
	});
	return row;
};
