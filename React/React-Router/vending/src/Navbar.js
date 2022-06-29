import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/honeybun">
        Honeybun
      </NavLink>
      <NavLink exact to="/doritos">
        Doritos
      </NavLink>
      <NavLink exact to="/coke">
        Coke
      </NavLink>
    </nav>
  );
}

export default NavBar;