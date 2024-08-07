/** @format */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ConferenceHighlights from "../components/ConferenceHighlights";
import Testimonials from "../components/Testimonials";

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
