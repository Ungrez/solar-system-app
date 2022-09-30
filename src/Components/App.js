import "../Styles//App.css";
import Planet from "./Planet";
import AboutPlanet from "./AboutPlanet";
import { Data } from "../Components/Data";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(Data);
  }, []);

  return (
    <div id="app-container">
      <div id="planet-container">
        <Planet />
        <AboutPlanet />
      </div>
    </div>
  );
}

export default App;
