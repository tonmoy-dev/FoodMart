import { HeartIcon } from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RelatedProducts from "../../src/Components/Products/RelatedProducts/RelatedProducts";
import { fetchCartProducts, fetchWishlistProducts } from "../../src/redux/slices/productSlice";

const catagorylist = [
  {
    key: 1,
    name: "Fruits & Vegetables",
    icon: "https://i.ibb.co/ZVJF7xP/cat7-25x25-crop-center.jpg",
  },
  {
    key: 2,
    name: "Snacks",
    icon: "https://i.ibb.co/BG2y3sV/noodles-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 3,
    name: "Beverages",
    icon: "https://i.ibb.co/BftdYCG/juice-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 4,
    name: "Breakfast",
    icon: "https://i.ibb.co/txMh3MW/local-breakfast-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 5,
    name: "Frozen & Canned",
    icon: "https://i.ibb.co/k0q3d94/frozen-snacks-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 6,
    name: "Dairy",
    icon: "https://i.ibb.co/30599Tg/candy-chocolate-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 7,
    name: "Cooking",
    icon: "https://i.ibb.co/QkRdZL1/rice-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 8,
    name: "Baking",
    icon: "https://i.ibb.co/4SXw3b6/nuts-dried-fruits-src-https-eggyolk-chaldal.webp",
  },
  {
    key: 9,
    name: "Bread & Bakery",
    icon: "https://i.ibb.co/wrLqNbx/cakes-src-https-eggyolk-chaldal.webp",
  },
];


const SingleProduct = ({ related, product }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  // console.log(router.pathname, router.query);
  const user = useSelector((state) => state.states.user);

  const [control, setControl] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

   // add to increment and decrement function
    
   const handleDecrement = () => {
  if(quantity < 1){
     return setQuantity(quantity);

  }
  else{
    return setQuantity(quantity - 1);

  }
    
   }
   const handleIncrement = () => {
    if(quantity < 10){
    return setQuantity(quantity + 1);

    }
    
   }

  // add to wishlist
  const handleAddWishlist = async (product_title,product_price,user_rating, product_stock, product_imageUrl) => {
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
        email: user.email
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

  // Add to cart a product
  const addToCartHandler = async (product_title, product_price,product_imageUrl) => {
    // private routing
    if (!user?.email) {
      router.push('/login');
    }
    else if (user?.email) {
      axios.post("/api/cart", {
          title: product_title,
          price: product_price,
          image: product_imageUrl,
          description: product_title,
          quantity: 1,
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

  const images = [
    {
      original:`${product.product_imageUrl}`,
      thumbnail:`${product.product_imageUrl}`,
    },
    {
      original:`${product.product_category_img}`,
      thumbnail:`${product.product_category_img}`,
    },
    {
      original:`${product.product_imageUrl}`,
      thumbnail:`${product.product_imageUrl}`,
    },
    {
      original:`${product.product_category_img}`,
      thumbnail:`${product.product_category_img}`,
    },
     {
      original:`${product.product_imageUrl}`,
      thumbnail:`${product.product_imageUrl}`,
    }
    
  ];

  return (
    <div >
       <Script src="https://kit.fontawesome.com/0368de2544.js" crossorigin="anonymous"></Script>
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
            border-radius: 5px;
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
      
      <div>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-x-4">
            <div className="col-span-2">
              <div
                id="GalleryAndDetailsContainer"
                className="grid lg:grid-cols-2 grid-cols-1 gap-4 border rounded"
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
                  <h2 className="text-2xl primary-color font-semibold">
                    {product.product_title}
                  </h2>

                  <div id="rating" className="flex items-center my-2">
                  <Rating
                    initialRating={product.user_rating}
                    emptySymbol="far fa-star text-yellow-400"
                    fullSymbol="fas fa-star text-yellow-400"
                    readonly />
                  <span className=" text-blue-800 text-xs font-semibold mr-2  py-0.5 rounded dark:bg-white dark:text-black ml-1">
                    ({product.user_rating})
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
                    <h2 className="text-2xl font-bold primary-color py-4">
                      $ <span>{product.product_price}</span>
                    </h2>
                  </div>
                  <div id="details">
                    <p className="text-justify text-base pr-1">
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
                    <button className="bg-white  py-2 px-1 text-sm primary-color hover:bg-green-500 hover:text-white rounded cursor-default">
                      50gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm primary-color hover:bg-green-500 hover:text-white rounded cursor-default">
                      75gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm primary-color hover:bg-green-500 hover:text-white rounded cursor-default">
                      100gm
                    </button>
                    <button className="bg-white  py-2 px-1 text-sm primary-color hover:bg-green-500 hover:text-white rounded cursor-default">
                      150gm
                    </button>
                  </div>
                  <div id="quantity case-number" className="flex flex-row items-center">
                    <h2 className="text-lg pr-4 text-gray-700 font-semibold capitalize">
                      quantity :{" "}
                    </h2>
                    <button id="minus" onClick={handleDecrement} className="minus border hover:bg-green-500 hover:text-white bg-white shadow px-4 py-1">
                      -
                    </button>
                 
                    <div className="form-control text-center  border shadow bg-white px-4 py-1">{quantity}</div>
                    
                    <button id="plus" onClick={handleIncrement} className="plus border hover:bg-green-500 hover:text-white bg-white shadow px-4 py-1">
                      +
                    </button>
                  </div>
                  <div className="flex items-center flex-row gap-2 py-6">
                    <button className="primary-bg-color text-white font-base px-2 py-1 hover:bg-green-600 rounded-sm">
                      {" "}
                      <HeartIcon
                        onClick={() => handleAddWishlist(product.product_title, product.product_price,product.user_rating,product.product_stock, product.product_imageUrl)}
                        className="h-6 w-6 text-white" />
                    </button>
                    <button onClick={() =>
                      addToCartHandler(
                        product.product_title, product.product_price,product.product_imageUrl
                      )
                    }
                      className="primary-bg-color text-white font-base px-2 py-1 hover:bg-green-600 rounded-sm">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="py-10 px-4 shadow border rounded-md mt-4 mx-4 md:mx-0"
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
              <div className="shadow rounded-md p-4 mx-4 md:mx-0">
                <div>
                  <h1 className="mb-2 border-b-2 py-2 inline-block border-green-500 font-semibold text-xl">Category</h1>
                </div>
                <div>
                  {
                    catagorylist.map(item => (
                      <div key={item.key} className="flex flex-row justify-start p-3 align-middle border border-gray-200 drop-shadow-md rounded bg-green-50 mb-2">
                        <img src={item.icon} height="30" width="30" alt=''/>
                        <Link href={`/category/${item.name}`}><a className='px-2 py-2'>{item.name}</a></Link>
                      </div>
                    ))
                  }
                  
                </div>
              </div>
            </div>
          </div>

          <div id="related-product">
            <RelatedProducts related={related}></RelatedProducts>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer/> 
    </div>
  );
};

export default SingleProduct;

export async function getServerSideProps(context) {
  const data = await fetch(`${process.env.MY_APP_DOMAIN}/api/products/productDetails?product_id=${context.query.product_id}`);
  const product = await data.json();

  const related_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products/`);
  const related = await related_res.json();

  return {
    props: { product, related }
  }
}