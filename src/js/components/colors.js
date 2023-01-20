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
	colors.forEach((color) => {
		if (color === "primary") {
			for (let i = 2; i <= 8; i += 2) {
				const darkVariation = document.createElement("span");
				darkVariation.textContent = `primary dark ${i}`;
				darkVariation.classList.add(`bg-primary-dark-${i}`);
				darkVariation.classList.add("text-white");
				const separator = document.createElement("span");
				separator.textContent = " | ";
				c.insertAdjacentElement("beforeend", darkVariation);
				darkVariation.insertAdjacentElement("afterend", separator);
			}
			for (let i = 2; i <= 8; i += 2) {
				const lightVariation = document.createElement("span");
				lightVariation.textContent = `primary light ${i}`;
				lightVariation.classList.add(`bg-primary-light-${i}`);
				lightVariation.classList.add("text-black");
				const separator = document.createElement("span");
				separator.textContent = " | ";
				c.insertAdjacentElement("beforeend", lightVariation);
				lightVariation.insertAdjacentElement("afterend", separator);
			}
		}
	});
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
