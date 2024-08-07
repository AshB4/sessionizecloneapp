/** @format */

import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ children, onClick, variant = "primary", ...props }) {
	return (
		<button className={`button ${variant}`} onClick={onClick} {...props}>
			{children}
		</button>
	);
}

export default PrimaryButton;
