import { useEffect, useState, useContext } from 'react';
import './productComponent.css';
import Axios from "axios";
import { productDetailsCntx } from "../productContext";
import { useHistory } from 'react-router-dom';


const ProductComponent = () => {

    const history = useHistory();
    const { selectedCategory, setSelectedProduct } = useContext(productDetailsCntx);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        console.log("--useEffect--");
        console.log("selectedCategory ", selectedCategory);
        Axios({
            method: "get",
            url: "products.json"
        }).then((response) => {

            let data = response.data.products;
            console.log(data);
            setProducts(data);
            setFilteredProducts(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {

        console.log("selectedCategory ", selectedCategory);
        let tempFilteredProducts = [];
        if (selectedCategory != undefined && selectedCategory.categoryID != "All") {

            tempFilteredProducts = products.filter((product) => {
                return (selectedCategory == undefined || product.categoryID == selectedCategory.categoryID);
            });
        } else {

            tempFilteredProducts = products;
        }
        setFilteredProducts(tempFilteredProducts);
    }, [selectedCategory]);

    function productSelectHandler(selectedProduct) {

        console.log("selectedProduct ", selectedProduct);
        setSelectedProduct(selectedProduct);
        history.push("/address");
    }
    return (
        <div className="product-main-div">
            {filteredProducts.length > 0 ? filteredProducts.map((product) => {
                return (
                    <div className="product-single" onClick={() => productSelectHandler(product)}>{product.productName}</div>
                )
            }) : (
                <div className="no-data-div">No Products Found</div>
            )}
        </div>
    );
}

export default ProductComponent;