/** @format */

import React, { useState } from "react";
import SpeakerCard from "./SpeakerCard";
import "./SpeakersList.css";

const speakers = [
	{
		id: 1,
		name: "John Doe",
		photo: "/photos/john.jpg",
		title: "Data Scientist",
		bio: "Expert in AI and Machine Learning",
		expertise: "AI",
		track: "Data",
	},
	{
		id: 2,
		name: "Jane Smith",
		photo: "/photos/jane.jpg",
		title: "Cloud Architect",
		bio: "Specialist in cloud solutions",
		expertise: "Cloud",
		track: "Infrastructure",
	},
	// Add more speaker objects here
];

function SpeakersList() {
	const [expertiseFilter, setExpertiseFilter] = useState("");
	const [trackFilter, setTrackFilter] = useState("");

	const filteredSpeakers = speakers.filter((speaker) => {
		return (
			(!expertiseFilter || speaker.expertise === expertiseFilter) &&
			(!trackFilter || speaker.track === trackFilter)
		);
	});

	return (
		<div className="speakers-list">
			<h2>Speakers</h2>
			<div className="filters">
				<select
					onChange={(e) => setExpertiseFilter(e.target.value)}
					value={expertiseFilter}>
					<option value="">All Expertise</option>
					<option value="AI">AI</option>
					<option value="Cloud">Cloud</option>
					{/* Add more options based on available expertise */}
				</select>
				<select
					onChange={(e) => setTrackFilter(e.target.value)}
					value={trackFilter}>
					<option value="">All Tracks</option>
					<option value="Data">Data</option>
					<option value="Infrastructure">Infrastructure</option>
					{/* Add more options based on available tracks */}
				</select>
			</div>
			<div className="speaker-cards">
				{filteredSpeakers.map((speaker) => (
					<SpeakerCard key={speaker.id} speaker={speaker} />
				))}
			</div>
		</div>
	);
}

export default SpeakersList;
