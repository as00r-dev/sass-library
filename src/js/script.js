// import styles
import "../style/style.scss";

// import modules
import { Heading } from "./components/heading";
import { Button } from "./components/button";
import { Paragraph } from "./components/paragraph";
import { Anchor } from "./components/anchor";
import { Card } from "./components/card";
import { Colors } from "./components/colors";
import { Hr } from "./components/hr";
import { Column } from "./components/column";
import { Row } from "./components/row";

const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

container.append(
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
	Hr({
		classes: ["mt-4", "mb-4"],
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
	Hr({
		classes: ["mt-4", "mb-4"],
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
	}),
	Hr({
		classes: ["mt-4", "mb-4"],
	}),
	Heading({
		type: 1,
		content: "Font Sizes",
		classes: ["heading", "mb-2"],
	}),
	Paragraph({
		content: "This is small font",
		classes: ["font-sm"],
	}),
	Paragraph({
		content: "This is medium font",
		classes: ["font-md"],
	}),
	Paragraph({
		content: "This is large font",
		classes: ["font-lg"],
	}),
	Paragraph({
		content: "This is extra large font",
		classes: ["font-xl"],
	}),
	Paragraph({
		content: "This is extra, extra large font",
		classes: ["font-xxl"],
	}),
	Hr({
		classes: ["mt-4", "mb-4"],
	}),
	Heading({
		type: 1,
		content: "Grid System",
		classes: ["mb-2"],
	}),
	Row({
		classes: ["gap-2", "justify-center"],
		children: [
			Column({
				classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
				children: [
					Card({
						title: "this a card lol",
						content: "some content goes here :P",
					}),
				],
			}),
			Column({
				classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
				children: [
					Card({
						title: "this a card lol",
						content: "some content goes here :P",
					}),
				],
			}),
			Column({
				classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
				children: [
					Card({
						title: "this a card lol",
						content: "some content goes here :P",
					}),
				],
			}),
			Column({
				classes: ["col-12-xs", "col-5-sm", "col-3-xl"],
				children: [
					Card({
						title: "this a card lol",
						content: "some content goes here :P",
					}),
				],
			}),
		],
	}),
	Hr({
		classes: ["mt-4", "mb-4"],
	})
);

body.append(container);
