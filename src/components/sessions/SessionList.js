/** @format */

import React from "react";
import SessionCard from "./SessionCard";
import "./SessionList.css";

function SessionList({ sessions }) {
	return (
		<div className="session-list">
			{sessions.map((session) => (
				<SessionCard key={session.id} session={session} />
			))}
		</div>
	);
}

export default SessionList;
