/** @format */

import React from "react";
import "./Card.css";

function Card({ children, ...props }) {
	return (
		<div className="card" {...props}>
			{children}
		</div>
	);
}

export default Card;
