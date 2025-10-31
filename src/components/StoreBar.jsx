import "../styles/StoreBar.css";
import CartModal from "./CartModal";

export default function StoreBar() {
  const imageButton = <img src="shopping-cart.png" alt="" className="shopping-cart-icon"/>;

  return (
    <div className="store-bar">
        <div className="search-bar">
          <img src="search-icon.png" alt="Search" className="search-icon"/>
          <input type="text" placeholder="Search products..." className="search-input"/>
        </div>
        <CartModal customButton={imageButton}></CartModal>
    </div>
  );
}
