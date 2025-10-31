import React, {useState} from "react";
import "../styles/CartModal.css";

function CartModal({customButton, children}) {
    
    const [cart,setCart] = useState(false);
    const cartList = JSON.parse(localStorage.getItem("cartList")) || [];

    const toggleCart = () => {
        setCart(!cart);
    }

    return (
        <> 
            <div onClick={toggleCart}>{customButton}</div>
            {cart ? (
                <div className="cart">
                    <div className="cart-overlay" onClick={toggleCart}></div>
                    <div className="cart-content">
                        <h1>Your Cart</h1>
                        {cartList.length > 0 ? cartList.map(item => (
                            <div key={item.title}>
                                <p className="cart-item-title">{item.title}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Cost: ${item.quantity * item.cost}</p>
                            </div>
                        )) : <p>Your cart is empty.</p>}
                    </div>
                </div>
            ) : null}
            
        </>
    );
}

export default CartModal;