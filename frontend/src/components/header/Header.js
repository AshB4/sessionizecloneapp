/** @format */

import React from "react";
import "./Header.css"; 

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<img src="/logo.svg" alt="SQL Sat Conference" />
			</div>
			<nav className="nav">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/schedule">Schedule</a>
				<a href="/speakers">Speakers</a>
				<a href="/contact">Contact</a>
			</nav>
		</header>
	);
}

export default Header;
