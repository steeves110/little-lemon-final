import React from "react";
import "./styles/Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="testimonials-section-background">
        <div className="testimonials-section-container">
            <div className="testimonials-section-title">
                <h1>Testimonials</h1>
            </div>
            <TestimonialsCard />
        </div>
    </div>
    
  )
}

export default Testimonials;
