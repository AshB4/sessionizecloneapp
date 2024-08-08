/** @format */

import React from "react";
import "./Footer.css"; // Import the Footer-specific styles

function Footer() {
	return (
		<footer className="footer">
			<h3>Follow us on social media</h3>
			<div className="social-icons">
				<a href="https://facebook.com" aria-label="Facebook">
					<img src="/icons/facebook.svg" alt="Facebook" />
				</a>
				<a href="https://twitter.com" aria-label="Twitter">
					<img src="/icons/twitter.svg" alt="Twitter" />
				</a>
				<a href="https://linkedin.com" aria-label="LinkedIn">
					<img src="/icons/linkedin.svg" alt="LinkedIn" />
				</a>
			</div>
			<div className="footer-content">
				<p>&copy; 2024 SQL Sat. All rights reserved.</p>
				<nav className="footer-nav">
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
					<a href="/privacy-policy">Privacy Policy</a>
					<a href="/terms-of-service">Terms of Service</a>
				</nav>
			</div>
		</footer>
	);
}

export default Footer;
