export const Colors = () => {
	const c = document.createElement("div");
	colors.forEach((color) => {
		const textColor = document.createElement("span");
		textColor.textContent = `${color} text`;
		textColor.classList.add(`text-${color}`);
		const separator = document.createElement("span");
		separator.textContent = " | ";
		c.insertAdjacentElement("beforeend", textColor);
		textColor.insertAdjacentElement("afterend", separator);
	});
	c.insertAdjacentHTML("beforeend", "<br><br>");
	colors.forEach((color) => {
		const bgColor = document.createElement("span");
		bgColor.textContent = `${color} bg`;
		bgColor.classList.add(`bg-${color}`);
		bgColor.classList.add("text-white");
		const separator = document.createElement("span");
		separator.textContent = " | ";
		c.insertAdjacentElement("beforeend", bgColor);
		bgColor.insertAdjacentElement("afterend", separator);
	});
	c.insertAdjacentHTML("beforeend", "<br><br>");
	return c;
};

const colors = [
	"primary",
	"secondary",
	"error",
	"info",
	"blue",
	"red",
	"yellow",
	"green",
	"orange",
	"purple",
	"gray",
];
