import { useSelector } from "react-redux";
import Product from "../src/Components/Products/Product/Product";

const Test = (products) => {
    const allProducts = products.products.slice(0, 10);
    const items = useSelector((state) => state.wishlists.wishlists);
    console.log(items)
    return (
        <div className="grid grid-cols-4 gap-2">
            {items.length}
            {
                allProducts.slice(0,10).map(product => (
                    <Product key={product._id} product={product}></Product>
                ))
            }
        </div>
    )

}
export default Test;

export const getServerSideProps = async () => {
  
    const products_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
    const products = await products_res.json();
  
    return {
        props: {products},
    }
}