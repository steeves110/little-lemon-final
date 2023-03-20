import React from "react";
import "./styles/AboutSection.css";
import imageA from "./assets/MarioAdrianA.jpg";
import imageB from "./assets/MarioAdrianB.jpg";

const AboutSection = () => {
  return (
    <div className="about-section-background">
        <div className="about-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Philippines</h2>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                <p>Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
            </div>
            <div className="section-right">
                <div className="image-box-a">
                    <img src={imageA} alt="Mario and Adrian" />
                </div>
                <div className="image-box-b">
                    <img src={imageB} alt="Mario and Adrian" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection;
