import "../styles/StoreBar.css";
import CartModal from "./CartModal";
import ProductCard from "./ProductCard";
import React, {useEffect, useState} from "react";
import storeItems from "../data/items.json";

export default function StoreBar() {
  const imageButton = <img src="shopping-cart.png" alt="" className="shopping-cart-icon"/>;
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(storeItems);
  const [cartList, setCartList] = useState(() => JSON.parse(localStorage.getItem("cartList")) || []);

  useEffect(()=> {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const handleSearch = () => {
      if (search.trim() === '') {
        setItems(storeItems);
        return;
      }
      const searchResults = storeItems.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setItems(searchResults.length > 0 ? searchResults : storeItems);
  };

  function handleAddToCart(product){
    const {id, title, quantity, cost} = product;
    alert(product);

    setCartList(prev => {
        const exists = prev.some(item => item.id === id);

        const updated = exists ? prev.map(item => item.id === product.id ?
          {...item,
            quantity: item.quantity + product.quantity,
            cost: item.cost + product.cost,}
          : item) : [...prev, product];
        return updated;
    });
  }

  return (
    <>
    <div className="store-bar">
        <div className="search-bar">
          <img src="search-icon.png" alt="Search" className="search-icon"/>
          <input type="text" placeholder="Search products..." className="search-input" onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearch}/>
        </div>
        <CartModal customButton={imageButton} cartList={cartList}></CartModal>
    </div>
    <div className="card-container">
      {items.map(item=><ProductCard
          key={item.id}
          {...item}
          onAddToCart={handleAddToCart}
      />)}
    </div>
    </>
  );
}