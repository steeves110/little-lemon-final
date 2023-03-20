import React from "react";
import "./styles/HeroSection.css";
import { NavLink } from "react-router-dom";
import HeroImage from "./assets/restaurantfood.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="hero-section-left">
                <h1>Little Lemon</h1>
                <h2>Philippines</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
            <div className="hero-section-right">
                <div className="image-box">
                    <img src={HeroImage} alt="Restaurant Dish" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;
