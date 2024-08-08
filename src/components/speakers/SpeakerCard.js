/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./SpeakerCard.css";

function SpeakerCard({ speaker }) {
	return (
		<div className="speaker-card">
			<img src={speaker.photo} alt={speaker.name} className="speaker-photo" />
			<h3>{speaker.name}</h3>
			<p>{speaker.title}</p>
			<p>{speaker.bio}</p>
			<Link to={`/speakers/${speaker.id}`}>Read More</Link>
		</div>
	);
}

export default SpeakerCard;
