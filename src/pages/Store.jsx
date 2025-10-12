import ProductCard from "../components/ProductCard";
import StoreBar from "../components/StoreBar";
import "../styles/PagesStyle.css";

function Store() {
    return (
        <div>
            <StoreBar />
            <div className="card-container">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default Store;