import Products from "../../src/Components/Products/Products/Products";
import SideBar from "../../src/Components/Products/SideBar/SideBar/SideBar";

const AllProducts = ({products}) => {

  return (
    <>
      <div className=" flex flex-col justify-center align-middle items-center">
        <div className="pt-10">
          <h1 className="text-gray-700 font-bold text-3xl mb-6">
            All Fresh Products
          </h1>
        </div>
      </div>
      <div>
        <div className="AllProducts-style grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-4">
          <div className="lg:col-span-3 sm:col-span-2">
            <Products products={products}></Products>
          </div>
          <div className="px-4 mt-2">
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;


export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
  const products = await res.json();
return {
  props: {products},
}
};