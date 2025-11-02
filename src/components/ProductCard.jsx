import React, {useState} from "react";
import "../styles/ProductCard.css";

function ProductCard({id, title, description, cost, imageUrl, onAddToCart}){
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(e){
        setQuantity(Number(e.target.value));
    }

    function handleAdd(){
        if (imageUrl === "coming-soon.png") {
            alert(`${title} is out of stock`);
            return;
        }
        onAddToCart({id, title, quantity, cost: cost * quantity});
    }

    return( <div className="card">
                <h1 className='card-title'>{title}</h1>
                <img className='card-image'src={imageUrl} alt=""/>
                <p>{description}</p>
                <p>Quantity:
                    <input type='number' min='1' max="100" value={quantity} className='card-input' onChange={handleQuantityChange} />
                </p>
                <p>Cost: ${(cost * quantity).toFixed(2)}</p>
                <button className='card-button' onClick={handleAdd}>Add to Cart</button>
            </div>)
}

export default ProductCard;