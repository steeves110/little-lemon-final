import React from "react";
import "./styles/Specials.css";
import SpecialsCard from "./SpecialsCard";
import { NavLink } from "react-router-dom";

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week's Specials</h1>
            <div className="btn-container">
                <NavLink to="/order-online"><button className="btn btn-menu">Online Menu</button></NavLink>
            </div>
      </div>
      <SpecialsCard />
    </div>
  )
}

export default Specials;
