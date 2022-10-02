import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css";
import ExploreIcon from "@mui/icons-material/Explore";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TuneIcon from "@mui/icons-material/Tune";
const NavBar = () => {
  return (
    <nav id="nav-bar">
      <NavLink to="/explore">
        <ExploreIcon />
      </NavLink>
      <NavLink to="/search">
        <TravelExploreIcon />
      </NavLink>
      <NavLink to="/discover">
        <RocketLaunchIcon />
      </NavLink>
      <NavLink to="/options">
        <TuneIcon />
      </NavLink>
    </nav>
  );
};

export default NavBar;
