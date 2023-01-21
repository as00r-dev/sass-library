export const Row = (obj) => {
	const row = document.createElement("div");
	row.classList.add("row");
	obj.children.forEach((child) => {
		row.append(child);
	});
	return row;
};
