import React, { useState } from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [color, setColor] = useState("");

	const [lights, setLights] = useState([{ name: "stoplight-color-red", value: "red" }, { name: "stoplight-color-yellow", value: "yellow" }, { name: "stoplight-color-green", value: "green" }])


	return (
		<main id="main-container">
			<button id="add-light-button" onClick={()=>{
				if(lights.length <= 3){
					setLights([...lights, {name: "stoplight-color-purple", value: "purple"}])
				}else {
					console.log(" ya tienes la luz purpura agregada!");
					
				}
				
			}}>Agregar</button>
			<div id="stoplight-container">
				<div id="stoplight--top">
					{
						lights.map(lightPerlight => <button className={"" + (color === lightPerlight.value ? lightPerlight.name : '')} onClick={() => setColor(lightPerlight.value)}>
							<div className="stoplight-color-shadow"></div>
						</button>)
					}
				</div>
				<div id="stoplight--body"></div>
				<div id="stoplight--bottom"></div>
			</div>
		</main>
	);
};

export default Home;
