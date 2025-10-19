import ProductCard from "../components/ProductCard";
import StoreBar from "../components/StoreBar";
import "../styles/PagesStyle.css";

function Store() {
    return (
        <div>
            <StoreBar />
            <div className="card-container">
                <ProductCard title="White Flare ETB" imageUrl="shopping.jpeg"/>
                <ProductCard imageUrl="shopping-1.jpeg"/>
                <ProductCard/>
            </div>
        </div>
    );
}

export default Store;