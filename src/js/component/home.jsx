import React from "react";
import { NavBar } from "./nav.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Contenedor } from "./contenedor.jsx";
import { Foot } from "./footer.jsx";



//create your first component
const Home = () => {
	return (
		<>
			<NavBar logo="Start Bootstrap" logoLink="https://getbootstrap.com/" />

			<Contenedor />

			<Foot copy="React Landing Page"/>

		</>
	);
};

export default Home;
