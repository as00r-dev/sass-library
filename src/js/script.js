// import styles
import "../style/style.scss";

// import modules
import { Heading } from "./components/heading";
import { Button } from "./components/button";
import { Paragraph } from "./components/paragraph";
import { Anchor } from "./components/anchor";
import { Card } from "./components/card";
import { Colors } from "./components/colors";

const body = document.querySelector("body");

body.append(
	Heading({
		type: 1,
		content: "Colors",
		classes: ["heading"],
	}),
	Colors(),
	Anchor({
		content: "hover me",
		classes: ["text-primary", "text-hover-orange-light-1"],
	}),
	Heading({
		type: 1,
		content: "Cards",
		classes: ["heading"],
	}),
	Card({
		title: "This is a card",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
	}),
	Heading({
		type: 1,
		content: "Buttons",
		classes: ["heading"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-primary", "text-white"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-secondary", "text-white"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-error", "text-white"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-info", "text-white"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-outlined-purple", "text-purple", "text-hover-white"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-outlined-orange", "text-orange", "text-hover-white"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-complement-purple"],
	}),
	Anchor({
		content: "click me",
		classes: ["btn-complement-primary"],
	})
);
