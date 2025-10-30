import ProductCard from "../components/ProductCard";
import StoreBar from "../components/StoreBar";
import "../styles/PagesStyle.css";
import storeItems from "../data/items.json";

function Store() {

    return (
        <div>
            <StoreBar />
            <div className="card-container">
                {storeItems.map(item=><ProductCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    cost={item.cost}
                    imageUrl={item.imageUrl}
                />)}
            </div>
        </div>
    );
}

export default Store;