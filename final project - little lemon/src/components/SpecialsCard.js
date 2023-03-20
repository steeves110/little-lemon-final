import React from "react";
import "./styles/SpecialsCard.css";
import Dessert1 from "./assets/greek salad.jpg";
import Dessert2 from "./assets/bruschetta.svg";
import Dessert3 from "./assets/lemon dessert.jpg";
import { MdDeliveryDining } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SpecialsCard = () => {
    const specialMenus = [
        {
            image: Dessert1,
            title: "Greek Salad",
            price: "₱716.79",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
            order: "Order a delivery"
        },
        {
            image: Dessert2,
            title: "Bruschetta",
            price: "₱330.53",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
            order: "Order a delivery"
        },
        {
            image: Dessert3,
            title: "Lemon Dessert",
            price: "₱275.90",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            order: "Order a delivery"
        }
    ];

    const specialMenusItems = specialMenus.map(menu => {
        const image = menu.image;
        const title = menu.title;
        const price = menu.price;
        const description = menu.description;
        const order = menu.order;

        return (
            <div key={title}>
                <div className="special-card-container">
                    <div className="image-container">
                        <img src={image} alt="Special dessert" />
                    </div>
                    <div className="special-card-text">
                        <div className="special-card-title">
                            <h3>{title}</h3>
                            <h3 className="price-tag">{price}</h3>
                        </div>
                        <p>{description}</p>
                        <NavLink to="#" className="order-link">
                            <h4>
                                {order}
                                {<MdDeliveryDining className="order-link" size={30} style={{ color: "#333333", marginLeft: "10px", }} />}
                            </h4>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className="special-card">
                {specialMenusItems}
            </div>
        </div>
    )
}

export default SpecialsCard;
