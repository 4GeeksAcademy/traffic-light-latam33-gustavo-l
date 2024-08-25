import React, { useState } from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
    const [color, setColor] = useState("");
    const [index, setIndex] = useState(0);
    const colors = ["red", "yellow", "green","purple"];
    const [lights, setLights] = useState([
        { name: "stoplight-color-red", value: "red" },
        { name: "stoplight-color-yellow", value: "yellow" },
        { name: "stoplight-color-green", value: "green" }
    ]);

    const toggleColor = () => {
        setIndex((prevIndex) => (prevIndex + 1) % 4);  
        setColor(colors[(index + 1) % 4]); 
    };

	return (
		<main id="main-container">
			<button id="add-light-button" onClick={()=>{
				if(lights.length <= 3){
					setLights([...lights, {name: "stoplight-color-purple", value: "purple"}])
				}else {
					console.log(" ya tienes la luz purpura agregada!");
					
				}
			}}>Agregar Color</button>
			<button id="toggle-color-button" onClick={toggleColor}>Alternar Color</button>
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
