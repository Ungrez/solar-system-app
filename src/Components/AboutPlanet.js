import React from "react";
import "../Styles/AboutPlanet.css";
const AboutPlanet = ({ props }) => {
  const { planets, index } = props;
  return (
    <div id="about-planet">
      <h1>{planets[index].name.toUpperCase()}</h1>
      <p>{planets[index].message}</p>
      <h4 onClick={() => console.log("działam")}>Detail</h4>
    </div>
  );
};

export default AboutPlanet;
