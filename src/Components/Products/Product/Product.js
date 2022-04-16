import { EyeIcon, HeartIcon, RefreshIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from "react";
import { FaCartPlus } from 'react-icons/fa';
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from "../../../redux/slices/cartSlice";
import { addToCompareList } from "../../../redux/slices/compareSlice";
import { fetchCartProducts, fetchCompareProducts, fetchWishlistProducts, setloading } from "../../../redux/slices/productSlice";
import { addToWishlist } from "../../../redux/slices/wishlistSlice";

const Product = ({ product }) => {
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.states.user);
  const router = useRouter();
  const compareItems = useSelector((state) => state.compareList.compareList);

  useEffect(() => {
    dispatch(fetchWishlistProducts(user));
    dispatch(fetchCompareProducts(user));
    dispatch(fetchCartProducts(user));
    dispatch(setloading(false));
  }, [dispatch, control]);

  // handle maximum products for compare list
  const handleNoCompare = () => {
    toast.warn('Sorry! Maximum products added.', {
      position: "bottom-left"
    });
  }
  
  // Add to cart a product
  const addToCartHandler = async (id, title, image, price, description) => {
    const cartItem = {
      _id: id,
      title: title,
      image: image,
      price: price,
      description: description,
      quantity: 1,
      email: user.email
    }
    dispatch(addToCart(cartItem));
  };
  const {
    _id,
    product_badge,
    product_title,
    product_category,
    product_imageUrl,
    vendor_name,
    user_rating,
    product_price,
    produc_Details,
    product_stock
  } = product;

  return (
    <>
  
        <Script src="https://kit.fontawesome.com/0368de2544.js" crossorigin="anonymous"></Script>

      <div className="relative p-3 bg-white border border-gray-200 rounded-md product-card hover:drop-shadow-lg">
        <div className="absolute left-0 right-0 z-50 top-40">
          <div className="relative flex items-center justify-center w-3/5 h-full gap-2 py-3 mx-auto text-gray-500 transition bg-white rounded-full shadow-lg product-card-overlay md:text-gray-600 md:py-2">
            <button data-tooltip="+ Add to wishlist">
              <HeartIcon
                onClick={()=> dispatch(addToWishlist(product))}
                className="relative p-1 rounded-full w-9 md:w-7 hover:bg-green-600 hover:text-white"
              />
            </button>
            <Link href={`/products/${_id}`}>
              <button data-tooltip="Quick view">
                <EyeIcon className="p-1 rounded-full w-9 md:w-7 hover:bg-green-600 hover:text-white" />
              </button>
            </Link>
            {
              (compareItems.length <= 2) && (
                <button data-tooltip="+ Add to compare">
                  <RefreshIcon
                    onClick={()=> dispatch(addToCompareList(product))}
                    className="p-1 rounded-full w-9 md:w-7 hover:bg-green-600 hover:text-white" />
            </button>
              )
            }
            {
              (compareItems.length >= 3) && (
                <button data-tooltip="+ Add to compare">
              <RefreshIcon onClick={handleNoCompare} className="p-1 rounded-full w-9 md:w-7 hover:bg-green-600 hover:text-white" />
            </button>
              )
            }
          </div>
        </div>

        <span className="absolute top-0 left-0 z-10 px-2 py-1 mt-2 text-xs font-semibold tracking-wide text-white uppercase bg-red-500 rounded-full rounded-l-none">
          {product_badge}
        </span>
        {product_badge == "Sale" && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1 mt-2 text-xs font-semibold tracking-wide text-white uppercase bg-pink-500 rounded-full rounded-l-none">
            {product_badge}
          </span>
        )}
        {product_badge == "New" && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1 mt-2 text-xs font-semibold tracking-wide text-white uppercase bg-blue-500 rounded-full rounded-l-none">
            {product_badge}
          </span>
        )}
        <div className="w-40 p-2 mx-auto">
          <Image
            className="rounded-t-lg"
            src={product_imageUrl}
            alt="product image"
            width="150"
            height="150"
          />
        </div>
        <div className="px-2">
          <span className="text-xs font-bold text-slate-400 hover:text-sky-400 ">
            {product_category}
          </span>
          <a href="./">
            <h3 className="font-semibold tracking-tight text-gray-900 text-md">
              {product_title.slice(0, 20)}..
            </h3>
          </a>
          <div className="flex items-center my-2">
            <Rating
              initialRating={user_rating}
              emptySymbol="far fa-star text-yellow-400"
              fullSymbol="fas fa-star text-yellow-400"
              readonly />
            <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">
              ({user_rating})
            </span>
          </div>

          <div className="mb-2 text-xs font-semibold ">
            <span>By </span>
            <span className="text-green-600">{vendor_name}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-dark">
                ${product_price}
              </span>
            </div>
            <a
              href="#"
              onClick={() =>
                addToCartHandler(
                  _id,
                  product_title,
                  product_imageUrl,
                  product_price,
                  produc_Details
                )
              }
              className="p-3 bg-white border-2 rounded-full shadow primary-color hover:bg-green-500 focus:ring-0 hover:text-white"
            >
              <FaCartPlus className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;