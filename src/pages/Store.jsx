import ProductCard from "../components/ProductCard";
import StoreBar from "../components/StoreBar";

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