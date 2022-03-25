import { css } from "@emotion/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "../../src/Components/Pagination/Pagination";
import Product from "../../src/Components/Products/Product/Product";
import StarRating from "../../src/Components/StarRating/StarRating";

// Products filters
const productsFilters = [
    // category
    [
        { name: "Snacks", icon: "https://i.ibb.co/pz3dsR0/c-milk.png"},
        { name: "Breakfast", icon: "https://i.ibb.co/JcBmCJM/c-clothing.png"},
        { name: "Beverages", icon: "https://i.ibb.co/wW1ypYC/c-pets.png"},
    ],
    // rating
    [
        { rating: "5", icon: "https://i.ibb.co/pz3dsR0/c-milk.png"},
        { rating: "4", icon: "https://i.ibb.co/JcBmCJM/c-clothing.png"},
        { rating: "3", icon: "https://i.ibb.co/wW1ypYC/c-pets.png"},
    ],
    // price
    [
        { index:"1", minPrice:0, maxPrice:100, icon: "https://i.ibb.co/pz3dsR0/c-milk.png"},
        { index:"2", minPrice:100, maxPrice:200, icon: "https://i.ibb.co/pz3dsR0/c-milk.png"},
        { index:"3", minPrice:200, maxPrice:400, icon: "https://i.ibb.co/pz3dsR0/c-milk.png"},
    ],
  ];
  
const AllProducts = ({ products }) => {
    const [color, setColor] = useState("green");
    const [control, setControl] = useState(false);
    const [filterProducts, setFilterProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentAllProducts = products?.slice(indexOfFirstPost, indexOfLastPost);
    const currentProducts = filterProducts?.slice(indexOfFirstPost, indexOfLastPost);
    
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // category wise filter
    const filterHandler = (categoryName) => {
        setCurrentPage(1);
        setControl(true);
        const newProducts = products.filter(
            (product) => product.product_category == categoryName
        );
        setFilterProducts(newProducts);
        setLoading(false);
        setControl(false);
    };
    // Rating wise filter
    const ratingFilterHandler = (rating) => {
        setCurrentPage(1);
        setControl(true);
        const newRatedProducts = products.filter(
            (product) => product.user_rating == rating
        );
        setFilterProducts(newRatedProducts);
        setLoading(false);
        setControl(false);
    };
    // Price wise filter
    const priceFilterHandler = (minPrice, maxPrice) => {
        setCurrentPage(1);
        setControl(true);
        const newPricedProducts = products.filter(
            (product) => (parseInt(product.product_price) > minPrice) && (parseInt(product.product_price) < maxPrice));
        setFilterProducts(newPricedProducts);
        setLoading(false);
        setControl(false);
    };

    // Dot loader css
    const override = css`
    display: block;
    margin: 0 auto;
    `;  
    

    return (
        <div>
            <div className="head-banner">
                <div className="container mx-auto">
                    <div className="banner-inner flex flex-col justify-center items-center">
                        <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
                            <span className="">All Fresh Products</span>
                        </h1>
                        {/* nav */}
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <Link href="/">Home</Link>
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <ChevronRightIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                            all-products
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex p-2 mx-8 mb-2 mt-8 rounded-md flex-row justify-between items-center shadow">
                    <h2 className="text-black">
                        We have found
                        <span className="inline-block mx-1 font-semibold text-green-700">
                            {loading && products.length}
                            {!loading && filterProducts.length}
                        </span>
                        products for you
                    </h2>
                </div>
                <div className="AllProducts-style grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-4">
                    <div className="lg:col-span-3 sm:col-span-2 order-last md:order-first">
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 justify-center align-middle">
                            {
                                control && <DotLoader color={color} loading={loading} css={override} size={60} />
                            }
                            {loading
                                ? currentAllProducts.map((product) => (
                                    <Product
                                        key={product._id}
                                        product={product}
                                    ></Product>
                                ))
                                : currentProducts.map((product) => (
                                    <Product
                                        key={product._id}
                                        product={product}
                                    ></Product>
                                ))}
                        </div>
                        
                    </div>
                    <div className="px-4 mt-2 order-first md:order-last">
                        <div className="w-full mt-2 shadow rounded-md px-4 pb-2 sidebar-style">
                            <div>
                                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-md md:text-xl">
                                    Category
                                </h1>
                            </div>
                            <div className="flex flex-row md:flex-col flex-wrap gap-2">
                                {
                                    productsFilters[0].map(item => (
                                        <div key={item.name} onClick={() => filterHandler(item.name)} className="flex flex-row justify-start p-3 align-middle  border border-gray-400 drop-shadow-md rounded bg-green-100 cursor-pointer">
                                            <Image
                                                src={item.icon}
                                                height="30"
                                                width="30"
                                                alt=""
                                            ></Image>
                                            <p className="px-2 py-2 text-xs md:text-base font-medium text-gray-700">
                                                {item.name}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full mt-6 shadow rounded-md px-4 pb-2 sidebar-style">
                            <div>
                                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-md md:text-xl">
                                    Find by Rating
                                </h1>
                            </div>
                            <div className="flex flex-row md:flex-col flex-wrap gap-2">
                                {
                                    productsFilters[1].map(item => (
                                        <div key={item.rating} onClick={() => ratingFilterHandler(item.rating)} className="flex flex-row justify-start p-3 align-middle  border border-gray-300 drop-shadow-md rounded  bg-orange-100 cursor-pointer">
                                            <Image
                                                src="https://i.ibb.co/pz3dsR0/c-milk.png"
                                                height="30"
                                                width="30"
                                                alt=""
                                            ></Image>
                                            <div className="flex items-center gap-1 px-2 py-2 text-xs md:text-base ">
                                                <StarRating initialRating={item.rating} />
                                                <p className="hidden md:block font-medium text-gray-700">({item.rating})</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full mt-6 shadow rounded-md px-4 pb-2 sidebar-style">
                            <div>
                                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-md md:text-xl">
                                    Find by price
                                </h1>
                            </div>
                            <div className="flex flex-row md:flex-col flex-wrap gap-2">
                                {
                                    productsFilters[2].map(item => (
                                        <div key={item.index} onClick={() => priceFilterHandler(item.minPrice, item.maxPrice)} className="flex flex-row justify-start p-3 align-middle  border border-gray-300 drop-shadow-md rounded bg-blue-100 cursor-pointer">
                                            <Image
                                                src={item.icon}
                                                height="30"
                                                width="30"
                                                alt=""
                                            ></Image>
                                            <p className="px-2 py-2 text-xs md:text-base font-medium text-gray-700" >
                                                ${item.minPrice} - ${item.maxPrice}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* pagination */}
                {
                    loading && (
                        <div className="container mt-2">
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={products.length}
                                paginate={paginate}
                            />
                        </div>
                    )
                }
                {
                    !loading && (
                        <div className="container mt-2">
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={filterProducts.length}
                                paginate={paginate}
                            />
                        </div>
                    )
                }
                {/* pagination */}
            </div>
            
            {/* Toast Notification */}
            <ToastContainer/> 
        </div>
    );
};

export default AllProducts;

/* export async function getStaticProps() {
    const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`)
    const products = await res.json();
    return {
      props: {
        products,
      },
    }
  } */
export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
    const allProducts = await res.json();
    const products = allProducts.slice(0, 60);
    return {
        props: { products },
    };
};
