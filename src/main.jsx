import React from "react";
import { createRoot } from "react-dom/client";
import Calculator from "./components/Calculator";
import Header from "./components/Header"
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Header/>
		<Calculator />
	</React.StrictMode>
);
