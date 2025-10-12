import React, {useState} from "react";
import "../styles/ProductCard.css";

function Card({ title='Test Title', description='This is a short description', cost="10", imageUrl="login-icon.png" }){
    const [qty, setQty] = useState(1);

    function handleQtyChange(e){
        setQty(e.target.value);
    }

    function handleAddToCart(){
        alert(`Added ${qty} of ${title} to cart.`);
    }

    return( <div className="card">
                <h1 className='card-title'>{title}</h1>
                <img className='card-image'src={imageUrl} alt=""/>
                <p>{description}</p>
                <p>Quantity: <t/>
                    <input type='number' min='1' max="100" value={qty>0 && qty<=100 ? qty : 1} className='card-input' onChange={(e) => handleQtyChange(e)} />
                </p>
                <p>Cost: ${cost * (qty>0 && qty<=100 ? qty : 1)}</p>
                <button className='card-button' onClick={handleAddToCart}>Add to Cart</button>
            </div>)
}



export default Card;