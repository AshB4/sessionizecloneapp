/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Sessions from "./pages/sessions/Sessions";
// import SessionDetail from "./pages/sessionDetails/SessionDetail";
// import Speakers from "./pages/speakers/Speakers";
// import SpeakerDetail from "./pages/speakerDetails/SpeakerDetail";
// import Schedule from "./pages/sched/Schedule";
// import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
// import Profile from "./pages/profile/Profile";
// import AdminDashboard from "./pages/adminDash/AdminDashboard";
// import SessionManagement from "./pages/sessionMgmt/SessionManagement";
// import SpeakerManagement from "./pages/speakerMgmt/SpeakerManagement";
// import UserManagement from "./pages/userMgmt/UserManagement";
// import Reports from "./pages/report/Reports";
// import Contact from "./pages/contact/Contact";
// import About from "./pages/about/About";
// import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
// import TermsOfService from "./pages/legal/TermsOfService";

function AppRoutes() {
	return (
		// <Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/sessions" element={<Sessions />} />
				<Route path="/sessions/:id" element={<SessionDetail />} />
				<Route path="/speakers" element={<Speakers />} />
				<Route path="/speakers/:id" element={<SpeakerDetail />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/admin" element={<AdminDashboard />} />
				<Route path="/admin/sessions" element={<SessionManagement />} />
				<Route path="/admin/speakers" element={<SpeakerManagement />} />
				<Route path="/admin/users" element={<UserManagement />} />
				<Route path="/admin/reports" element={<Reports />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-of-service" element={<TermsOfService />} /> */}
			</Routes>
		// </Router>
	);
}

export default AppRoutes;
