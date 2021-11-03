import { createContext, useState } from "react";

export const productDetailsCntx = createContext();
const ProductContextProviders = (props) => {

    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedProduct, setSelectedProduct] = useState();

    return (
        <productDetailsCntx.Provider value={{ 
            selectedCategory, setSelectedCategory,
            selectedProduct, setSelectedProduct
         }}>
            {props.children}
        </productDetailsCntx.Provider>
    );
}
export default ProductContextProviders;