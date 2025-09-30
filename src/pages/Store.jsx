import ProductCard from "../components/ProductCard";

function Store() {
    return (
        <div>
            <h1>Store</h1>
            <div className="card-container">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default Store;