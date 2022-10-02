import React, { useState } from "react";
import "../Styles/AboutPlanet.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSpring, animated } from "react-spring";
import CloseIcon from "@mui/icons-material/Close";

const AboutPlanet = ({ props }) => {
  const { planets, index, showDesc, setShowDesc } = props;

  const anim = useSpring({
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    borderRadius: "0px",
    animation: "none",
  });

  return (
    <animated.div
      onClick={() => setShowDesc(!showDesc)}
      className="about-planet"
      style={showDesc ? anim : null}
    >
      <CloseIcon
        style={
          showDesc
            ? { opacity: "1", display: "block" }
            : { opacity: "0", display: "none" }
        }
      />
      <div
        id="desc"
        style={
          showDesc
            ? { opacity: "1", display: "block" }
            : { opacity: "0", display: "none" }
        }
      >
        <h4>Disance from sun</h4>
        <p>{planets[index].distance}</p>
        <h4>Radius</h4>
        <p>{planets[index].radius}</p>
        <h4>Year</h4>
        <p>{planets[index].year}</p>
        <h4>Planet type</h4>
        <p>{planets[index].type}</p>
      </div>
      <div id="planetName">
        <h1>{planets[index].name.toUpperCase()}</h1>
      </div>
      <p>
        {planets[index].message}
        <h4 onClick={() => setShowDesc(!showDesc)}>Detail</h4>
      </p>
      <div id="moreAbout"></div>
    </animated.div>
  );
};

export default AboutPlanet;
