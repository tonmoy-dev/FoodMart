
import Product from "../../src/Components/Products/Product/Product";
import SideBar from "../../src/Components/Products/SideBar/SideBar/SideBar";

const AllProducts = ({ products }) => {

  return (
    <div>
      <div className="flex flex-col justify-center align-middle items-center">
        <div className="pt-10">
          <h1 className="text-gray-700 font-bold text-3xl mb-6">
            All Fresh Products
          </h1>
        </div>
      </div>
      <div>
      <div className="flex p-2 mx-4 mb-2 rounded-lg flex-row justify-between items-center shadow">
        <h2 className=" text-black">
            We have found
            <span className="font-semibold text-green-700"> {products.length} </span>
            products for you
        </h2>

        <div>
          <form action="">
            <select
              className="mx-2 border-none shadow-sm"
              name="Sort by"
              id="cars"
            >
              <option selected disabled>
                Show
              </option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
            <select
              className="mx-2 border-none shadow-sm"
              name="cars"
              id="cars"
            >
              <option selected disabled>
                Category
              </option>
              <option value="snacks">snacks</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
      </div>
        <div className="AllProducts-style grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-4">
          <div className="lg:col-span-3 sm:col-span-2">
            <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center align-middle product-grid-style">
              {
                products.map(product => (
                  <Product key={product._id} product={product}></Product>
                ))
              }
              
              </div>
          </div>
          <div className="px-4 mt-2">
            <SideBar></SideBar>
          </div>
        </div>
      </div>
    </div>
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