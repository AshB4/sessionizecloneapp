/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import "./SpeakerDetail.css";

const speakers = [
	// Sample data
	{
		id: 1,
		name: "John Doe",
		photo: "/photos/john.jpg",
		title: "Data Scientist",
		bio: "Expert in AI and Machine Learning",
		social: {
			twitter: "https://twitter.com/johndoe",
			linkedin: "https://linkedin.com/in/johndoe",
		},
		sessions: ["Advanced AI", "Machine Learning 101"],
	},
	{
		id: 2,
		name: "Jane Smith",
		photo: "/photos/jane.jpg",
		title: "Cloud Architect",
		bio: "Specialist in cloud solutions",
		social: {
			twitter: "https://twitter.com/janesmith",
			linkedin: "https://linkedin.com/in/janesmith",
		},
		sessions: ["Cloud Architecture", "Kubernetes Essentials"],
	},
	// Add more speaker objects here
];

function SpeakerDetail() {
	const { id } = useParams();
	const speaker = speakers.find((s) => s.id === parseInt(id));

	if (!speaker) {
		return <p>Speaker not found</p>;
	}

	return (
		<div className="speaker-detail">
			<img src={speaker.photo} alt={speaker.name} className="speaker-photo" />
			<h2>{speaker.name}</h2>
			<p>{speaker.title}</p>
			<p>{speaker.bio}</p>
			<div className="social-links">
				<a
					href={speaker.social.twitter}
					target="_blank"
					rel="noopener noreferrer">
					Twitter
				</a>
				<a
					href={speaker.social.linkedin}
					target="_blank"
					rel="noopener noreferrer">
					LinkedIn
				</a>
			</div>
			<h3>Sessions</h3>
			<ul>
				{speaker.sessions.map((session, index) => (
					<li key={index}>{session}</li>
				))}
			</ul>
		</div>
	);
}

export default SpeakerDetail;
