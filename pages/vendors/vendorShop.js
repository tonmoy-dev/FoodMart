import React from "react";
import VendorShop from "../../src/Components/Vendors/VendorShop/VendorShop";

const vendorShop = () => {
    return (
        <div>
			<VendorShop></VendorShop>
        </div>
    );
};

export default vendorShop;

/* export async function getStaticProps() {
  
    const products_res = await fetch('http://foodmart11.herokuapp.com/products');
    const products = await products_res.json();
  
    return {
      props:{products}
    }
  
  } */
  