import { EyeIcon, HeartIcon, RefreshIcon } from "@heroicons/react/outline";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { FaCartPlus } from 'react-icons/fa';
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCartProducts, fetchCompareProducts, fetchWishlistProducts, setloading } from "../../../redux/slices/productSlice";


const Product = ({ product }) => {
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.states.user);
  const router = useRouter();
  
  useEffect(() => {
    dispatch(fetchWishlistProducts(user));
    dispatch(fetchCompareProducts(user));
    dispatch(fetchCartProducts(user));
    dispatch(setloading(false));
  }, [dispatch, control]);

  // add to wishlists
  const handleAddWishlist = async (product_title, product_price, user_rating, product_stock, product_imageUrl, email) => {
    // private routing
    if (!user?.email) {
        router.push('/login');
    }
    else if (user?.email) {
      axios.post("/api/wishlists", { 
        product_title: product_title,
        product_price: product_price,
        user_rating: user_rating,
        product_stock: product_stock,
        product_imageUrl: product_imageUrl,
        email:email
       }).then((response) => {
  
        if (response.data.insertedId) {
          setControl(true);
          dispatch(fetchWishlistProducts(user));
          toast.success('Wow! Added to wishlist.', {
            position: "bottom-left"
          });
        } else {
          setControl(false);
        }
      });
    }
    
  };

  // add to compare lists
  const handleAddCompare = async (product_title,product_price,user_rating,product_stock,product_imageUrl,produc_Details,email) => {
    // private routing
    if (!user?.email) {
      router.push('/login');
    }
    else if (user?.email) { 
      axios.post("/api/compare", {
        product_title: product_title,
        product_price: product_price,
        user_rating: user_rating,
        product_stock: product_stock,
        product_imageUrl: product_imageUrl,
        produc_Details: produc_Details,
        email:email  
      }).then((response) => {
        if (response.data.insertedId) {
          setControl(true);
          dispatch(fetchCompareProducts(user));
          toast.success('Wow! Added to compare list.', {
            position: "bottom-left"
          });
        }
        setControl(false);
      });
    }
  };
  
  // Add to cart a product
  const addToCartHandler = async (title, image, price, description) => {
    dispatch(setloading(true));
    
    // private routing
    if (!user?.email) {
      router.push('/login');
    }
    else if (user?.email) {
      axios.post("/api/cart", {
        title: title,
        image: image,
        price: price,
        description: description,
        email: user.email
      })
      .then((response) => {
        if (response.data.insertedId) {
          setControl(true);
          dispatch(fetchCartProducts(user));
          toast.success('Wow! Added to your cart.', {
            position: "bottom-left"
          });
        }
        setControl(false);
      });
    }
    
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
      <Head>
        <script src="https://kit.fontawesome.com/0368de2544.js" crossorigin="anonymous"></script>
      </Head>
      <div className="product-card bg-white relative border-gray-200 border rounded-lg hover:drop-shadow-lg p-3">
        <div className="z-50 absolute left-0 right-0 top-40">
          <div className="product-card-overlay transition flex justify-center items-center h-full gap-2 text-gray-500 md:text-gray-600 bg-white w-3/5 py-3 md:py-2 mx-auto rounded-full shadow-lg relative">
            <button data-tooltip="+ Add to wishlist">
              <HeartIcon
                onClick={() => handleAddWishlist(product_title, product_price, user_rating, product_stock, product_imageUrl, user.email)}
                className="w-9 md:w-7 p-1 rounded-full hover:bg-green-600 hover:text-white relative"
              />
            </button>
            <Link href={`/products/${_id}`}>
              <button data-tooltip="Quick view">
                <EyeIcon className="w-9 md:w-7 p-1 rounded-full hover:bg-green-600 hover:text-white" />
              </button>
            </Link>
            <button data-tooltip="+ Add to compare">
              <RefreshIcon onClick={() => handleAddCompare(product_title, product_price, user_rating, product_stock, product_imageUrl, produc_Details, user.email)} className="w-9 md:w-7 p-1 rounded-full hover:bg-green-600 hover:text-white" />
            </button>
          </div>
        </div>

        <span className="absolute left-0 top-0 z-10 px-2 py-1  bg-red-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
          {product_badge}
        </span>
        {product_badge == "Sale" && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1  bg-pink-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
            {product_badge}
          </span>
        )}
        {product_badge == "New" && (
          <span className="absolute top-0 left-0 z-10 px-2 py-1  bg-blue-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
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
            <h3 className="text-md font-semibold tracking-tight text-gray-900">
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

          <div className=" mb-2 text-xs font-semibold">
            <span>By </span>
            <span className="text-green-600">{vendor_name}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-dark">
                ${product_price}
              </span>
            </div>
            <a
              href="#"
              onClick={() =>
                addToCartHandler(
                  product_title,
                  product_imageUrl,
                  product_price,
                  produc_Details
                )
              }
              className="text-green-500 bg-white shadow  rounded-full hover:bg-green-500 focus:ring-0 p-3 border-2 hover:text-white"
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