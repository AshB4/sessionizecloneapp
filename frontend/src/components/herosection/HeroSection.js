/** @format */

import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import "../styles/HeroSection.css";

function HeroSection() {
	const handleClick = () => {
		alert("Button clicked!");
	};

	return (
		<section className="hero-section">
			<h1>Welcome to SQL Sat Conference</h1>
			<p>
				Join us for an exciting conference on SQL and data management. Dates:
				Oct 10-12, 2024
			</p>
			<PrimaryButton onClick={handleClick} ariaLabel="Click to learn more">
				Learn More
			</PrimaryButton>
		</section>
	);
}

export default HeroSection;
