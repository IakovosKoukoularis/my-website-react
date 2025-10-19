import "../styles/StoreBar.css";

function StoreBar() {
  return (
    <div className="store-bar">
        <div className="search-bar">
          <img src="search-icon.png" alt="Search" className="search-icon"/>
          <input type="text" placeholder="Search products..." className="search-input"/>
        </div>
        <button className="shopping-cart-button"><img src="shopping-cart.png" alt="Cart" className="shopping-cart-icon"/></button>
    </div>
  );
}

export default StoreBar;