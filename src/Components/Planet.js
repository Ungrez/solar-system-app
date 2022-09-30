import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../Styles/Planet.css";
import { TextureLoader } from "three";
import sunTexture from "../textures/sun.jpg";
import mercuryTexture from "../textures/mercury.jpg";
import venusTexture from "../textures/venus.jpg";
import earthTexture from "../textures/earth.jpg";
import marsTexture from "../textures/mars.jpg";
import jupiterTexture from "../textures/jupiter.jpg";
import saturnTexture from "../textures/saturn.jpg";
import uranusTexture from "../textures/uranus.jpg";
import neptuneTexture from "../textures/neptune.jpg";

const Planet = () => {
  const [index, setIndex] = useState(0);
  const [planet, setPlanet] = useState("earth");
  const planetsTexture = [
    sunTexture,
    mercuryTexture,
    venusTexture,
    earthTexture,
    marsTexture,
    jupiterTexture,
    saturnTexture,
    uranusTexture,
    neptuneTexture,
  ];
  const planets = [
    "mercury",
    "wenus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];
  useEffect(() => {
    const interval = setInterval(
      () =>
        setIndex((index) => {
          if (index < planets.length - 1) return index + 1;
          return setIndex(0);
        }),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  const Light = ({ brightness, color }) => {
    return (
      <rectAreaLight
        width={5}
        height={5}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  };

  const Sphere = () => {
    const mySphere = React.useRef();
    useFrame(() => (mySphere.current.rotation.y -= 0.0025));

    return (
      <mesh
        ref={mySphere}
        visible
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <sphereGeometry attach="geometry" args={[2.7, 32, 32]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0}
          metalness={0}
          map={new TextureLoader().load(planetsTexture[index])}
        />
      </mesh>
    );
  };

  return (
    <div id="canvas-container">
      <Canvas>
        <Sphere />
        <Light brightness={1.5} color={"white"} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Planet;
