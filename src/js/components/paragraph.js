export const Paragraph = (obj) => {
	const paragraph = document.createElement("p");
	paragraph.textContent = obj.content;
	obj.classes.forEach((className) => {
		paragraph.classList.add(className);
	});
	return paragraph;
};
