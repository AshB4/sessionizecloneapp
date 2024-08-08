/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import "./SessionDetail.css";

function SessionDetail({ sessions }) {
	const { id } = useParams();
	const session = sessions.find((session) => session.id === id);

	if (!session) {
		return <div>Session not found</div>;
	}

	return (
		<div className="session-detail">
			<h2>{session.title}</h2>
			<p>
				<strong>Speaker:</strong> {session.speaker}
			</p>
			<p>
				<strong>Date:</strong> {session.date}
			</p>
			<p>
				<strong>Time:</strong> {session.time}
			</p>
			<p>{session.fullDescription}</p>
			<button>Add to Personal Schedule</button>
		</div>
	);
}

export default SessionDetail;
