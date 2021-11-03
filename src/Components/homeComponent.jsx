import './homeComponent.css';
import CategoryComponent from './category/categoryComponent';
import ProductComponent from './product/productComponent';
import ProductContextProviders from "./productContext";

const HomeComponent = () => {

    return (
        <div>
            <ProductContextProviders>
                <div className="product-left-panel left">
                    <CategoryComponent />
                </div>
                <div className="product-right-panel left">
                    <ProductComponent />
                </div>
            </ProductContextProviders>
        </div>
    );
}

export default HomeComponent;