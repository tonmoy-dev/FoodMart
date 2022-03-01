import { HeartIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import RelatedProducts from "../../src/Components/Products/RelatedProducts/RelatedProducts";
import Category from "../../src/Components/Products/SideBar/Category/Category";

const SingleProduct = ({ related, product }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const images = [
    {
      original:`${product.product_imageUrl.thumbnail}`,
      thumbnail:
        "https://i.ibb.co/28dHMTv/25-525c2823-683a-445e-b187-6fe7ca3f5a8e-159x202.jpg",
    },
    {
      original:
        "https://i.ibb.co/DLf4KB6/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293.jpg",
      thumbnail:
        "https://i.ibb.co/KK4mDdw/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293-159x202.jpg",
    },
    {
      original: "https://i.ibb.co/xLprhyw/18-1024x1024.jpg",
      thumbnail: "https://i.ibb.co/b1G5N7h/18-159x202.jpg",
    },
    {
      original:
        "https://i.ibb.co/NZ3M6Xy/25-525c2823-683a-445e-b187-6fe7ca3f5a8e.jpg",
      thumbnail:
        "https://i.ibb.co/28dHMTv/25-525c2823-683a-445e-b187-6fe7ca3f5a8e-159x202.jpg",
    },
    {
      original:
        "https://i.ibb.co/DLf4KB6/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293.jpg",
      thumbnail:
        "https://i.ibb.co/KK4mDdw/1-da8f6f9f-7e5f-4601-ab50-8cfde5005293-159x202.jpg",
    },
  ];

  return (
    <div>
      <style jsx>
        {`
          .tabs {
            padding: 5px 10px;
            text-align: center;
            cursor: pointer;
            box-sizing: content-box;
            position: relative;
            outline: none;
            background: #fff;
            border: 1px solid #ccc;
            border-radius: 25px;
          }

          .active-tabs {
            background: #0e9f6e;
            color: #fff;
          }
          .tabs button {
            border: none;
          }
          .content-tabs {
            flex-grow: 1;
          }
          .content {
            background: white;
            width: 100%;
            height: 100%;
            display: none;
          }
          .active-content {
            display: block;
          }
        `}
      </style>
      <div className="border border-l-0 border-r-0 py-4">
        <nav className="flex px-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
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
                <a className="ml-1 text-sm font-sm text-green-500 hover:text-orange-500 md:ml-2">
                  <Link href="/products/all-products">Products</Link>
                </a>
              </div>
            </li>
            <li aria-current="page">
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
                <span className="ml-1 text-sm font-sm text-gray-400 md:ml-2">
                  Product Details
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-x-4">
            <div className="col-span-2">
              <div
                id="GalleryAndDetailsContainer"
                className="grid lg:grid-cols-2 grid-cols-1 gap-4"
              >
                <div className="pt-2" id="productGallry">
                  <ImageGallery
                    showPlayButton={false}
                    showFullscreenButton={true}
                    showNav={false}
                    items={images}
                    className="myclass"
                  />
                </div>
                <div id="productDetails" className="lg:px-0 md:px-0 px-4">
                  <h2 className="text-2xl text-green-500 font-semibold">
                    {product.product_title}
                  </h2>
                  <div id="rating" className="py-2">
                    *****{" "}
                    <span className="text-gray-500">
                      ({product.rating_count} reviews)
                    </span>
                  </div>
                  <h2 className="text-lg pt-4 font-semibold text-gray-700">
                    Availability :
                    <span className="text-sm text-orange-500">
                      {" "}
                      {product.product_stock} In Stock
                    </span>
                  </h2>
                  <div id="price">
                    <h2 className="text-2xl font-bold text-green-500 py-4">
                      $ <span>{product.product_price}</span>
                    </h2>
                  </div>
                  <div id="details">
                    <p className="text-justify text-base">
                      Hurry up! only{" "}
                      <span className="text-orange-500 font-semibold">
                        {product.product_stock}
                      </span>{" "}
                      {product.produc_Details}
                    </p>
                  </div>
                  <div
                    className="py-4 flex flex-row items-center gap-2"
                    id="size"
                  >
                    <h2 className="text-lg text-gray-700 font-semibold capitalize">
                      size :
                    </h2>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      50gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      75gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      100gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm text-green-500 hover:bg-green-500 hover:text-white rounded">
                      150gm
                    </button>
                  </div>
                  <div id="quantity" className="flex flex-row items-center">
                    <h2 className="text-lg pr-4 text-gray-700 font-semibold capitalize">
                      quantity :{" "}
                    </h2>
                    <button className="minus border hover:bg-green-500 hover:text-white bg-white shadow px-4 py-1">
                      -
                    </button>
                    <div className="quantityCount border shadow bg-white px-4 py-1">
                      0
                    </div>
                    <button className="plus border hover:bg-green-500 hover:text-white bg-white shadow px-4 py-1">
                      +
                    </button>
                  </div>
                  <div className="flex items-center flex-row gap-2 py-6">
                    <button className="bg-green-500 text-white font-base px-2 py-1 hover:bg-green-600">
                      {" "}
                      <HeartIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-green-500 text-white font-base px-2 py-1 hover:bg-green-600">
                      Add to cart
                    </button>
                    <button className="bg-green-500 text-white font-base px-2 py-1 hover:bg-green-600">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="py-10 px-4 shadow border rounded-lg mt-4 mx-4 md:mx-0"
                id="alldetails"
              >
                <div className="flex lg:flex-row flex-row text-sm gap-4 mb-4">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    Description
                  </button>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    Additional Info
                  </button>
                  <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                  >
                    Vendors
                  </button>
                  <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                  >
                    Reviews
                  </button>
                </div>

                <div className="content-tabs">
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <h2 className="font-semibold text-lg mb-4">Details</h2>
                    <p className="text-justify text-sm">
                      {product.produc_Details}
                      <br />
                      <br />
                      {product.produc_Details}
                    </p>
                    <h2 className="font-semibold text-lg my-4">
                      Packaging & delivery
                    </h2>
                    <p className="text-justify text-sm">
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.{" "}
                      <br /> Spluttered narrowly yikes left moth in yikes bowed
                      this that grizzly much hello on spoon-fed that alas
                      rethought much decently richly and wow against the
                      frequent fluidly at formidable acceptably flapped besides
                      and much circa far over the bucolically hey precarious
                      goldfinch mastodon goodness gnashed a jellyfish and one
                      however because.
                    </p>
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <h2 className="font-semibold text-lg mb-4">Info</h2>
                    <p className="text-justify text-sm">
                      Uninhibited carnally hired played in whimpered dear
                      gorilla koala depending and much yikes off far quetzal
                      goodness and from for grimaced goodness unaccountably and
                      meadowlark near unblushingly crucial scallop tightly
                      neurotic hungrily some and dear furiously this apart.{" "}
                      <br /> Spluttered narrowly yikes left moth in yikes bowed
                      this that grizzly much hello on spoon-fed that alas
                      rethought much decently richly and wow against the
                      frequent fluidly at formidable acceptably flapped besides
                      and much circa far over the bucolically hey precarious
                      goldfinch mastodon goodness gnashed a jellyfish and one
                      however because.
                    </p>
                  </div>

                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                    <h2 className="font-semibold text-lg mb-4">Vendors</h2>

                    <p className="text-justify text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos sed nostrum rerum laudantium totam unde adipisci
                      incidunt modi alias! Accusamus in quia odit aspernatur
                      provident et ad vel distinctio recusandae totam quidem
                      repudiandae omnis veritatis nostrum laboriosam architecto
                      optio rem, dignissimos voluptatum beatae aperiam
                      voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                  </div>
                  <div
                    className={
                      toggleState === 4 ? "content  active-content" : "content"
                    }
                  >
                    <h2 className="font-semibold text-lg mb-4">
                      Customer questions & answers
                    </h2>

                    <p className="text-justify text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos sed nostrum rerum laudantium totam unde adipisci
                      incidunt modi alias! Accusamus in quia odit aspernatur
                      provident et ad vel distinctio recusandae totam quidem
                      repudiandae omnis veritatis nostrum laboriosam architecto
                      optio rem, dignissimos voluptatum beatae aperiam
                      voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                  </div>
                </div>
              </div>
              {/* tab finish */}
            </div>

            <div id="catagory" className="md:pl-12 ">
              <div className="shadow rounded-lg p-4 mx-4 md:mx-0">
                <Category></Category>
              </div>
            </div>
          </div>

          <div id="related-product">
            <RelatedProducts related={related}></RelatedProducts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  return {
    paths: ["/products/[product_id]"],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/products/productDetails?product_id=${params.product_id}`
  );
  const product = await data.json();

  const related_res = await fetch("http://localhost:3000/api/products/");
  const related = await related_res.json();

  return {
    props: { related, product },
    revalidate: false,
  };
}
