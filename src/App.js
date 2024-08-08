/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundray";
import Header from "./components/header/Header";
import AppRoutes from "./routes";

function App() {
	return (
		<ErrorBoundary>
			<Router>
				<Header />
				<AppRoutes />
			</Router>
		</ErrorBoundary>
	);
}

export default App;
