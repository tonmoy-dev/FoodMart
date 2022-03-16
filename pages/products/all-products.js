import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Product from "../../src/Components/Products/Product/Product";

const AllProducts = ({ products }) => {
    const [filterProducts, setFilterProducts] = useState();
    const [loading, setLoading] = useState(true);

    // category wise filter
    const filterHandler = (categoryName) => {
        const newProducts = products.filter(
            (product) => product.product_category == categoryName
        );
        setFilterProducts(newProducts);
        setLoading(false);
    };
    // Rating wise filter
    const ratingFilterHandler = (rating) => {
        const newRatedProducts = products.filter(
            (product) => product.user_rating == rating
        );
        setFilterProducts(newRatedProducts);
        setLoading(false);
    };
    // Price wise filter
    const priceFilterHandler = (minPrice, maxPrice) => {
        const newPricedProducts = products.filter(
            (product) => (parseInt(product.product_price) > minPrice) && (parseInt(product.product_price) < maxPrice));
        setFilterProducts(newPricedProducts);
        setLoading(false);
    };

    // slicing
    const slicedProducts = products.slice(0, 10);

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
                <div className="flex p-2 mx-8 mb-2 mt-8 rounded-lg flex-row justify-between items-center shadow">
                    <h2 className=" text-black">
                        We have found
                        <span className="font-semibold text-green-700">
                            {" "}
                            {products.length}{" "}
                        </span>
                        products for you
                    </h2>

                    <div>
                        <form>
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
                                    Sub Category
                                </option>
                                <option value="snacks">Noodles</option>
                                <option value="saab">
                                    Candy &amp; Chocolate
                                </option>
                                <option value="opel">Local Breakfast</option>
                                <option value="opel">Coffee</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="AllProducts-style grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-4">
                    <div className="lg:col-span-3 sm:col-span-2">
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center align-middle product-grid-style">
                            {loading
                                ? slicedProducts.map((product) => (
                                      <Product
                                          key={product._id}
                                          product={product}
                                      ></Product>
                                  ))
                                : filterProducts.map((product) => (
                                      <Product
                                          key={product._id}
                                          product={product}
                                      ></Product>
                                  ))}
                        </div>
                    </div>
                    <div className="px-4 mt-2">
                        <div className="w-full mt-2 shadow rounded-lg px-4 pb-2 sidebar-style">
                            <div>
                                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-xl">
                                    Category
                                </h1>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start p-3 align-middle  border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                                    <Image
                                        src="https://i.ibb.co/pz3dsR0/c-milk.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() => filterHandler("Snacks")}
                                        className="px-2 py-2"
                                    >
                                        Snacks
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                                    <Image
                                        src="https://i.ibb.co/JcBmCJM/c-clothing.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() =>
                                            filterHandler("Breakfast")
                                        }
                                        className="px-2 py-2"
                                    >
                                        Breakfast
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-400 drop-shadow-md rounded my-4  bg-green-100">
                                    <Image
                                        src="https://i.ibb.co/wW1ypYC/c-pets.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() =>
                                            filterHandler("Beverages")
                                        }
                                        className="px-2 py-2"
                                    >
                                        Beverages
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6 shadow rounded-lg px-4 pb-2 sidebar-style">
                            <div>
                                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-xl">
                                    Find product
                                </h1>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start p-3 align-middle  border border-gray-300 drop-shadow-md rounded my-4  bg-orange-100">
                                    <Image
                                        src="https://i.ibb.co/pz3dsR0/c-milk.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() => ratingFilterHandler("5")}
                                        className="px-2 py-2"
                                    >
                                        <p className="flex pl-4">
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <span>(5)</span>
                                        </p>
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-300 drop-shadow-md rounded my-4  bg-orange-100">
                                    <Image
                                        src="https://i.ibb.co/JcBmCJM/c-clothing.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() => ratingFilterHandler("4")}
                                        className="px-2 py-2"
                                    >
                                        <p className="flex pl-4">
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />

                                            <span>(4)</span>
                                        </p>
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-300 drop-shadow-md rounded my-4  bg-orange-100">
                                    <Image
                                        src="https://i.ibb.co/wW1ypYC/c-pets.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() => ratingFilterHandler("3")}
                                        className="px-2 py-2"
                                    >
                                        <p className="flex pl-4">
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />
                                            <StarIcon
                                                className="h-5 w-5 text-orange-500"
                                                aria-hidden="true"
                                            />

                                            <span>(3)</span>
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6 shadow rounded-lg px-4 pb-2 sidebar-style">
                            <div>
                                <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-xl">
                                    Find by price
                                </h1>
                            </div>
                            <div>
                                <div className="flex flex-row justify-start p-3 align-middle  border border-gray-300 drop-shadow-md rounded my-4  bg-blue-100">
                                    <Image
                                        src="https://i.ibb.co/pz3dsR0/c-milk.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() =>
                                            priceFilterHandler(0,50)
                                        }
                                        className="px-2 py-2"
                                    >
                                        $0 - $50
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-300 drop-shadow-md rounded my-4  bg-blue-100">
                                    <Image
                                        src="https://i.ibb.co/JcBmCJM/c-clothing.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() =>
                                            priceFilterHandler(50,100)
                                        }
                                        className="px-2 py-2"
                                    >
                                        $50 - $100
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-300 drop-shadow-md rounded my-4  bg-blue-100">
                                    <Image
                                        src="https://i.ibb.co/wW1ypYC/c-pets.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() =>
                                            priceFilterHandler(100,200)
                                        }
                                        className="px-2 py-2"
                                    >
                                        $100 - $200
                                    </button>
                                </div>
                                <div className="flex flex-row justify-start p-3 align-middle border border-gray-300 drop-shadow-md rounded my-4  bg-blue-100">
                                    <Image
                                        src="https://i.ibb.co/wW1ypYC/c-pets.png"
                                        height="30"
                                        width="30"
                                        alt=""
                                    ></Image>
                                    <button
                                        onClick={() =>
                                            priceFilterHandler(200,400)
                                        }
                                        className="px-2 py-2"
                                    >
                                        $200 - $400
                                    </button>
                                </div>
                            </div>
                        </div>
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
        props: { products },
    };
};
