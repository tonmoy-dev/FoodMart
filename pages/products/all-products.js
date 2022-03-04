import {
  HomeIcon
} from "@heroicons/react/solid";
import Link from "next/link";
import Products from "../../src/Components/Products/Products/Products";
import SideBar from "../../src/Components/Products/SideBar/SideBar/SideBar";


export const getStaticProps = async () => {
  const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
  const products = await res.json();
return {
  props: {products},
}
};

const AllProducts = ({products}) => {

  return (
    <>
      <div className="border border-l-0 border-r-0 py-4">
        <nav className="flex px-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <HomeIcon
                  className="h-4 w-4 text-gray-700 mr-2"
                  aria-hidden="true"
                />
                <Link href="/">Home</Link>
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-sm font-sm text-gray-500 hover:text-orange-500 md:ml-2"
                >
                  Products
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
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

