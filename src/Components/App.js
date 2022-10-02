import "../Styles//App.css";
import NavBar from "./NavBar";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Content />
        <NavBar />
      </Router>
    </>
  );
}

export default App;
