/** @format */

import React from "react";
import "./SessionCard.css";

function SessionCard({ session }) {
	return (
		<div className="session-card">
			<h3>{session.title}</h3>
			<p>Speaker: {session.speaker}</p>
			<p>Date: {session.date}</p>
			<p>Time: {session.time}</p>
			<p>{session.description}</p>
		</div>
	);
}

export default SessionCard;
