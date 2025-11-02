import React, {useState} from "react";
import "../styles/CartModal.css";

function CartModal({customButton, children}) {
    
    const [cart,setCart] = useState(false);
    const cartList = JSON.parse(localStorage.getItem("cartList")) || [];

    function toggleCart() {
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
                        cartValue = cartValue + item.cost,
                        <div className="item-content">
                            <p>{item.quantity} of {item.title}: ${item.cost.toFixed(2)}</p>
                            <button className="item-button">delete</button>    
                        </div>
                    )) : <p>Your cart is empty.</p>}
                    <p>Total:${cartValue.toFixed(2)}</p>
                </div>
            </div>
        ) : null} 
        </>);
}

export default CartModal;