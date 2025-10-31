import React, {useState} from "react";
import ProductCard from "./ProductCard";
import "../styles/CartModal.css";

function CartModal({customButton, children}) {
    
    const [cart,setCart] = useState(false);
    const cartList = JSON.parse(localStorage.getItem("cartList")) || [];

    const toggleCart = () => {
        setCart(!cart);
    }

    let cartValue = 0;

    return (
        <> 
            <div onClick={toggleCart}>{customButton}</div>
            {cart ? (
                <div className="cart">
                    <div className="cart-overlay" onClick={toggleCart}></div>
                    <div className="cart-content">
                        <h1 className="cart-title">Cart</h1>
                        {cartList.length > 0 ? cartList.map(item => (
                            cartValue = cartValue + Number(item.quantity) * Number(item.cost),
                            <div className="item-content">
                                <p>{item.quantity} of {item.title}: ${item.quantity * item.cost}</p>
                                <button className="item-button">delete</button>    
                            </div>
                        )) : <p>Your cart is empty.</p>}
                        <p>Total:${cartValue}</p>
                    </div>
                </div>
            ) : null} 
        </>);
}

export default CartModal;