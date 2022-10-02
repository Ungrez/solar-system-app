import { useEffect, useState, useRef } from "react";
import Planet from "./Planet";
import AboutPlanet from "./AboutPlanet";
import { planets } from "../Components/Data";
const Explore = () => {
  const [index, setIndex] = useState(0);
  const [planet, setPlanet] = useState("earth");
  const [showDesc, setShowDesc] = useState(false);
  const appContainer = useRef();
  const canvaRef = useRef();

  useEffect(() => {
    const interval = setInterval(
      () =>
        setIndex((index) => {
          if (index < planets.length - 1) return index + 1;
          return setIndex(0);
        }),
      8000
    );
    return () => {
      clearInterval(interval);
      setIndex(0);
    };
  }, []);
  return (
    <div id="app-container" ref={appContainer}>
      <Planet props={{ index, setIndex, planet, setPlanet, showDesc }} />
      <AboutPlanet props={{ planets, index, showDesc, setShowDesc }} />
    </div>
  );
};

export default Explore;
