/** @format */

import React from "react";
import Header from "../../components/header/Header";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
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
			<PrimaryButton>Register Now</PrimaryButton>
			<SecondaryButton>Learn More</SecondaryButton>
			<Testimonials />
			<Footer />
		</div>
	);
}

export default Home;
