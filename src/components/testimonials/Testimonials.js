/** @format */

import React from "react";
import "./Testimonials.css";

function Testimonials() {
	const testimonials = [
		{
			quote: "This conference changed the way I think about data!",
			author: "Alice Johnson",
		},
		{
			quote: "A must-attend event for anyone in the SQL community.",
			author: "Bob Smith",
		},
	];

	return (
		<section className="testimonials">
			<h2>What People Are Saying</h2>
			{testimonials.map((testimonial, index) => (
				<blockquote key={index}>
					<p>"{testimonial.quote}"</p>
					<footer>- {testimonial.author}</footer>
				</blockquote>
			))}
		</section>
	);
}

export default Testimonials;
