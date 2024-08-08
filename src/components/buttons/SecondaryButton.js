/** @format */

import React from "react";
import "./SecondaryButton.css";

function SecondaryButton({
	children,
	onClick,
	variant = "secondary",
	...props
}) {
	return (
		<button className={`button ${variant}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

export default SecondaryButton;
