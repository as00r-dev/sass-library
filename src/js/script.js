// import styles
import "../style/style.scss";

// import modules
import { Heading } from "./components/heading";
import { Button } from "./components/button";
import { Paragraph } from "./components/paragraph";
import { Anchor } from "./components/anchor";
import { Card } from "./components/card";

const body = document.querySelector("body");

body.append(
	Heading({
		type: 1,
		content: "Cards",
		classes: ["heading"],
	}),
	Card({
		title: "This is a card",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
	})
);
