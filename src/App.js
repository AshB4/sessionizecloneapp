/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundray";
import AppRoutes from "./routes";
import "./styles/global.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
	return (
		<ErrorBoundary>
			<Router>
				<AppRoutes />
			</Router>
		</ErrorBoundary>
	);
}

export default App;
