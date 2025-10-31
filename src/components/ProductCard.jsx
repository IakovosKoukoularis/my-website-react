import React, {useState} from "react";
import CartModal from "./CartModal";
import "../styles/ProductCard.css";

function Card({ key='',title='Test Title', description='This is a short description', cost="10", imageUrl="coming-soon.png" }){
    const [quantity, setQuantity] = useState(1);
    const cartList = JSON.parse(localStorage.getItem("cartList")) || [];

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleAddToCart(){
        alert(`Added ${quantity} of ${title} to cart.`);
        localStorage.setItem("cartList", JSON.stringify([...cartList, {title: title, quantity: quantity, cost: cost}]));
    }

    function handleOutOfStock(){
        alert(`Sorry ${title} is out of stock`);
    }

    return( <div className="card">
                <h1 className='card-title'>{title}</h1>
                <img className='card-image'src={imageUrl} alt=""/>
                <p>{description}</p>
                <p>Quantity: <t/>
                    <input type='number' min='1' max="100" value={quantity>0 && quantity<=100 ? quantity : 1} className='card-input' onChange={(e) => handleQuantityChange(e)} />
                </p>
                <p>Cost: ${cost * (quantity>0 && quantity<=100 ? quantity : 1)}</p>
                <button className='card-button' onClick={imageUrl !== "coming-soon.png" ? handleAddToCart : handleOutOfStock}>Add to Cart</button>
            </div>)
}



export default Card;