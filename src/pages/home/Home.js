/** @format */

import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/herosection/HeroSection";
import Testimonials from "../../components/testimonials/Testimonials";
import ConferenceHighlights from "../../components/conferenceHighlights/ConferenceHighlights";
import "./Home.css";

function Home() {
	return (
		<div>
			<Header />
			<HeroSection />
			<ConferenceHighlights />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default Home;
