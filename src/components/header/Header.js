/** @format */

import React from "react";
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faInfoCircle,
	faCalendarAlt,
	faMicrophone,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<header className="header">
			<nav className="nav">
				<a href="/">
					<FontAwesomeIcon icon={faHome} style={{ color: "#003366" }} />
					Home
				</a>
				<a href="/about">
					<FontAwesomeIcon icon={faInfoCircle} style={{ color: "#003366" }} />
					About
				</a>
				<a href="/schedule">
					<FontAwesomeIcon icon={faCalendarAlt} style={{ color: "#003366" }} />
					Schedule
				</a>
				<a href="/speakers">
					<FontAwesomeIcon icon={faMicrophone} style={{ color: "#003366" }} />
					Speakers
				</a>
				<a href="/contact">
					<FontAwesomeIcon icon={faEnvelope} style={{ color: "#003366" }} />
					Contact
				</a>
			</nav>
		</header>
	);
}

export default Header;
