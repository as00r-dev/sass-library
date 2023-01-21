export const Hr = (obj) => {
	const hr = document.createElement("hr");
	obj.classes.forEach((className) => {
		hr.classList.add(className);
	});
	return hr;
};
