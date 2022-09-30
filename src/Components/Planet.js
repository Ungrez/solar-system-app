import React, { useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../Styles/Planet.css";
import { TextureLoader } from "three";
import { planetsTexture, planets } from "./Data";

const Planet = ({ props }) => {
  const { index } = props;

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
        position={[1.5, 0, 0]}
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
        <Light brightness={2} color={"white"} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Planet;
