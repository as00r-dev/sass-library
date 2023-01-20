export const Card = (obj) => {
	const card = document.createElement("div");
	card.classList.add("card");
	const cardTitle = document.createElement("h1");
	cardTitle.classList.add("card-title");
	cardTitle.textContent = obj.title;
	card.appendChild(cardTitle);
	const cardBody = document.createElement("p");
	cardBody.classList.add("card-body");
	cardBody.textContent = obj.content;
	cardTitle.insertAdjacentElement("afterend", cardBody);
	return card;
};
