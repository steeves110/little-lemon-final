import React from "react";
import "./styles/TestimonialsCard.css";
import anton from "./assets/anton.jpg";
import carol from "./assets/carol.jpg";
import donny from "./assets/donny.jpg";
import jessica from "./assets/jessica.jpg";

const TestimonialsCard = () => {
    const testimonials = [
        {   
            image: anton,
            name: "Anton",
            rating: "⭐⭐⭐⭐⭐",
            review: "I really love the Greek Salad! The best!",
        },
        {
            image: carol,
            name: "Carol",
            rating: "⭐⭐⭐⭐⭐",
            review: "Bruschetta is one of my favorite in Little Lemon. Delicious!",
        },
        {
            image: donny,
            name: "Donny",
            rating: "⭐⭐⭐⭐⭐",
            review: "I will always go back to this place. Very accommodating staff and delicious food.",
        },
        {
            image: jessica,
            name: "Jessica",
            rating: "⭐⭐⭐⭐⭐",
            review: "I super duper love this restaurant! Very fast delivery. Lemon Dessert's my favorite.",
        }
    ];

    const ratings = testimonials.map(feedback => {
            const image = feedback.image;
            const name = feedback.name;
            const rating = feedback.rating;
            const review = feedback.review;
            
            return (
                <div key={name}>
                    <div className="testimonial-card-container">
                        <div className="testimonial-card-text">
                            <h3>Rating: {rating}</h3>
                            <div className="testimonial-image-container">
                                <img src={image} alt="customer" />
                            </div>
                            <h3>{name}</h3>
                            <p>{review}</p>
                        </div>
                    </div>
                </div>
            )
    });


  return (
    <div>
      <div className="testimonial-card">
        {ratings}
      </div>
    </div>
  )
}

export default TestimonialsCard;
