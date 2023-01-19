// import styles
import "../style/fonts.scss";
import "../style/reset.scss";
import "../style/style.scss";
import "../style/utils.scss";

// import modules
import { Heading } from "./components/heading";
import { Button } from "./components/button";
import { Paragraph } from "./components/paragraph";
import { Anchor } from "./components/anchor";

const body = document.querySelector("body");

body.append(
	Heading({
		type: 1,
		content: "This is an H1",
		classes: ["heading"],
	}),
	Anchor({
		content: "This is an anchor.",
		classes: ["anchor"],
	}),
	Paragraph({
		content: "This is an error",
		classes: ["error"],
	}),
	Paragraph({
		content: "This is a notification",
		classes: ["notification"],
	}),
	Button({
		content: "Click Me",
		classes: ["button"],
	})
);
