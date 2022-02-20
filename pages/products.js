import React from "react";
import Products from "../src/Components/Products/Products/Products";
const products = (products) => {
    return (
        <div>
			<Products products={products}></Products>
        </div>
    );
};

export default products;

export async function getStaticProps() {
    const products_res = await fetch("http://foodmart11.herokuapp.com/products");
    const products = await products_res.json();
  

    return {
        props: { products, },
    };
}
