import React, { useState } from "react";

//include images into your bundle
import {Todoform} from "./Todoform.jsx"

//create your first component
const Home = () => {

	return (
		<div className="Home">
			<Todoform
			/>
			
		</div>
	);
};

export default Home;
