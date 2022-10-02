import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../Styles/Planet.css";
import { TextureLoader } from "three";
import { planetsTexture } from "./Data";
import { useSpring, animated } from "react-spring";

const Planet = ({ props }) => {
  const { index, canvaRef, showDesc } = props;

  const anim = useSpring({
    top: "0",
    left: "0",
    height: "60vh",
    transform: "translateY(0)",
    borderRadius: "0px",
    animation: "none",
  });

  const Light = ({ brightness, color }) => {
    const myLight = React.useRef();

    useFrame(() => {
      myLight.current.rotation.y -= 0.0025;
      if (showDesc) {
        myLight.current.position.z = 4;
      }
    });
    return (
      <rectAreaLight
        ref={myLight}
        width={5}
        height={5}
        color={color}
        intensity={brightness}
        position={[-3, 0.5, 3]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  };
  const Sphere = () => {
    const mySphere = React.useRef();
    useFrame(() => {
      mySphere.current.rotation.y -= 0.0025;
      if (showDesc) {
        if (mySphere.current.position.z < 2) {
          console.log(mySphere.current.position.z);
          mySphere.current.position.z += 0.05;
          mySphere.current.position.x += 0.045;
        }
      }
      if (!showDesc && mySphere.current.position.z > 0) {
      }
    });

    return (
      <mesh
        ref={mySphere}
        visible
        position={[0.7, 0.5, 0.8]}
        rotation={[0, 0, 0]}
        castShadow
        scale={showDesc ? 1.4 : 1.4}
      >
        <sphereGeometry attach="geometry" args={[1, 32, 32]} />
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
    <animated.div
      style={showDesc ? anim : null}
      id="canvas-container"
      ref={canvaRef}
    >
      <Canvas>
        <Sphere />
        <Light brightness={2} color={"white"} />
        <OrbitControls />
      </Canvas>
    </animated.div>
  );
};

export default Planet;
