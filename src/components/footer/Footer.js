/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import SecondaryButton from "../buttons/SecondaryButton";
import "./Footer.css";


function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="social-icons">
					<SecondaryButton
						onClick={() => (window.location.href = "https://facebook.com")}>
						<FontAwesomeIcon
							icon={faFacebookF}
							size="2x"
							style={{ color: "#003366" }}
						/>
					</SecondaryButton>
					<SecondaryButton
						onClick={() => (window.location.href = "https://twitter.com")}>
						<FontAwesomeIcon
							icon={faTwitter}
							size="2x"
							style={{ color: "#003366" }}
						/>
					</SecondaryButton>
					<SecondaryButton
						onClick={() => (window.location.href = "https://linkedin.com")}>
						<FontAwesomeIcon
							icon={faLinkedinIn}
							size="2x"
							style={{ color: "#003366" }}
						/>
					</SecondaryButton>
				</div>
				<p>&copy; 2024 SQL Saturday Baton Rouge. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
