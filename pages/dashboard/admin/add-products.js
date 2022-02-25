import React from 'react';
import AllProductss from './AllProductss';

const AddProducts = ({products}) => {
    return (
        <div>
            {/* <AllProductss products={products}></AllProductss> */}
            <AllProductss products={products} />
        </div>
    );
};

export default AddProducts;

export async function getStaticProps() {
    const products_res = await fetch("http://localhost:5000/products");
    const products = await products_res.json();
    return {
        props: { products },
    };
}