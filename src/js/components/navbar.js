export const Navbar = (obj) => {
	const navConatainer = document.createElement("div");
	navConatainer.classList.add("container");
	const navbar = document.createElement("nav");
	navbar.classList.add("navbar");
	navbar.append(navConatainer);
	obj.classes.forEach((className) => {
		navbar.classList.add(className);
	});
	const siteTitle = document.createElement("h2");
	siteTitle.textContent = obj.title;
	siteTitle.classList.add("site-title");
	const p = document.createElement("p");
	p.textContent = obj.content;
	navConatainer.append(siteTitle, p);
	return navbar;
};
