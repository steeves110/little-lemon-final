import React from "react";
import "./styles/Navigation.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className="navigation" id="navigation">
        <NavLinks />
    </nav>
  )
}

export default Navigation;