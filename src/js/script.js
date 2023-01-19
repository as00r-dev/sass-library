import "../style/style.scss";

const helloWorldComponent = () => {
	const elem = document.createElement("h1");
	elem.textContent = "Hello World!";
	return elem;
};

const body = document.querySelector("body");

body.append(helloWorldComponent());
