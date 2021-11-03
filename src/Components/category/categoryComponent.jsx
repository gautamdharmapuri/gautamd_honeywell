import { useContext, useEffect, useState } from 'react';
import './categoryComponent.css';
import Axios from "axios";
import { productDetailsCntx } from "../productContext";

const CategoryComponent = () => {

    const { setSelectedCategory } = useContext(productDetailsCntx);
    const [categories, setCategories] = useState([]);
    const [localSelectedCategory, setLocalSetSelectedCategory] = useState("All");

    useEffect(() => {

        console.log("--useEffect--");
        Axios({
            method: "get",
            url: "product-categories.json"
        }).then((response) => {

            let data = response.data.categories;
            console.log(data);
            setCategories(data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function categorySelectionHandler(categoryObject) {

        console.log(categoryObject);
        setLocalSetSelectedCategory(categoryObject.categoryID);
        setSelectedCategory(categoryObject);
    }

    return (
        <div>
            <div className="category-list left">
                <div className={"category-div " + (localSelectedCategory == "All" ? "active" : "")}
                    onClick={() => categorySelectionHandler({ "categoryID": "All" })}>All</div>
                {categories.map((category) => {
                    return (
                        <div className={"category-div " + (localSelectedCategory == category.categoryID ? "active" : "")}
                            onClick={() => categorySelectionHandler(category)}>
                            {category.categoryName}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default CategoryComponent;