import "../Styles//App.css";
import Planet from "./Planet";
import AboutPlanet from "./AboutPlanet";
import React, { useEffect, useState } from "react";
import { planets } from "../Components/Data";

function App() {
  const [index, setIndex] = useState(0);
  const [planet, setPlanet] = useState("earth");

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

  return (
    <div id="app-container">
      <Planet props={{ index, setIndex, planet, setPlanet }} />
      <AboutPlanet props={{ planets, index }} />
    </div>
  );
}

export default App;
