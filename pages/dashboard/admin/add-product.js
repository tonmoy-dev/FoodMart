import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import swal from "sweetalert";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import {
  BellIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";

const AddProduct = () => {
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);
  const notify = () => toast("Product added successfully!");

  //------------------------------------------------//
  const [addProduct, setAddProduct] = useState({
    product_badge: "",
    product_title: "",
    product_subTitle: "",
    product_category: "",
    sub_category: "",
    product_price: "",
    weight: "",
    product_stock: "",
    vendor_name: "",
    user_rating: "",
    produc_Details: "",
  });
  // console.log(addProduct);

  // take image data
  const [product_imageUrl, setProductImageUrl] = useState();
  const [product_category_img, setProductCategoryImg] = useState();

  const handleChange = (e) => {
    setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
  };
  // submit all data into backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product_imageUrl && !product_category_img) {
      return null;
    }
    const {
      product_badge,
      product_title,
      product_subTitle,
      product_category,
      sub_category,
      product_price,
      weight,
      product_stock,
      vendor_name,
      user_rating,
      produc_Details,
    } = addProduct;
    await axios
      .post("/api/products", {
        product_badge,
        product_title,
        product_subTitle,
        product_category,
        sub_category,
        product_imageUrl,
        product_category_img,
        product_price,
        weight,
        product_stock,
        vendor_name,
        user_rating,
        produc_Details,
      })
      .then((res) => {
        if (res.data.insertedId) {
          setControl(!control);
          swal(
            "Wow!",
            "Your add product request has been received.",
            "success"
          );
          router.push("/blogs");
          e.target.reset();
        } else {
          setControl(false);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // product_imageUrl: "",
  const handleImage = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "foodmart_preset");
      data.append("cloud_name", "foodmartshop");
      axios
        .post("https://api.cloudinary.com/v1_1/foodmartshop/image/upload", data)
        .then(({ data }) => {
          setProductImageUrl(data.url.toString());
          // console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // product_category_img: "",
  const handleImage2 = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "foodmart_preset");
      data.append("cloud_name", "foodmartshop");
      axios
        .post("https://api.cloudinary.com/v1_1/foodmartshop/image/upload", data)
        .then(({ data }) => {
          setProductCategoryImg(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //------------------------------------------------//
  const [color, setColor] = useState("green");
  const user = useSelector((state) => state.states.user);
  // users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    setControl(true);
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, [control]);

  const email = user?.email;

  const userNow = users.filter((user) => user?.email === email)[0];
  // console.log(userNow?.role);
  let role = userNow?.role;

  const override = css`
    display: block;
    margin: 0 auto;
  `;


  return (
    <div>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>
      <div>
        {loading && (
          <DotLoader color={color} loading={loading} css={override} size={60} />
        )}
      </div>
      {!loading && userNow && (
        <div>
          <div id="dashboard-container" className="">
            {/* top bar */}
            {/* {userNow?.role === 'admin' && <DashAdminMenu />}
                        {userNow?.role === 'vendor' && <DashVendorMenu />}
                        {userNow?.role === 'user' && <DashUserMenu />} */}
            <DashVendorMenu />
            {/* main content */}

            <div id="main-content" className="pt-24 bg-gray-100 pr-8 pl-8 lg:pl-72">
              <div className="bg-gray-100">
                <div className="pb-16 mx-5">
                  <h1 className=" text-black font-semibold text-4xl pb-2 ml-4">
                    Add Product
                  </h1>
                  {/* breadcrumb */}
                  <div className="pb-10 ml-4">
                    <nav className="flex" aria-label="Breadcrumb">
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
                            Home
                          </a>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <ChevronRightIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <a
                              href="#"
                              className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                            >
                              Dashboard
                            </a>
                          </div>
                        </li>
                        <li aria-current="page">
                          <div className="flex items-center">
                            <ChevronRightIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                              Add Product
                            </span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  {/* <h1 className="text-xl pb-3 font-semibold">Add New Product</h1> */}
                  <div className="md:flex flex-wrap items-center justify-center ">
                    <div className="md:w-full bg-white rounded-md p-8 md:m-8">
                      <form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        method="POST"
                      >
                        <div id="vendor_name_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="vendor_name"
                          >
                            Vendor Name{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                            className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="vendor_name"
                            id="vendor_name"
                            onBlur={(e) => handleChange(e)}
                            placeholder="Write vendor name here"
                          />
                        </div>
                        {/* tittle and subtitle start */}
                        <div className="my-4 flex justify-between items-center md:flex-row flex-col gap-4">
                        <div id="product_title_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_title"
                          >
                            Product Title{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="product_title"
                            id="product_title"
                            placeholder="Write product title"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        <div id="product_subTitle_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_subTitle"
                          >
                            Product Sub-Title{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="product_subTitle"
                            id="product_subTitle"
                            placeholder="Write product sub-title"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        </div>
                        {/* tittle and subtitle end */}
                        <div className="flex justify-between items-center md:flex-row flex-col gap-4">
                        <div id="product_category_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_category"
                          >
                            Product Category{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="product_category"
                            id="product_category"
                            placeholder="Write product catagory title"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        <div id="sub_category_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_sub_category"
                          >
                            Product Sub-Category{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="sub_category"
                            id="sub_category"
                            placeholder="Write product sub-category title"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        </div>
                        {/* */}
                        <div id="product_imageUrl_container" className="flex flex-col my-4">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_imageUrl"
                          >
                            Choose Product Image{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="file"
                            name="product_imageUrl"
                            id="product_imageUrl"
                            onChange={(e) => handleImage(e.target.files[0])}
                          />
                        </div>
                        <div id="product_category_img_container" className="flex flex-col mb-2">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_category_img"
                          >
                            Choose Product Category Image{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="file"
                            name="product_category_img"
                            id="product_category_img"
                            onChange={(e) => handleImage2(e.target.files[0])}
                          />
                        </div>
                        <div className="flex my-4 justify-between items-center md:flex-row flex-col gap-4">
                        <div id="product_price_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_price"
                          >
                            Product Price{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="number"
                            name="product_price"
                            id="product_price"
                            placeholder="e.g. 10"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        <div id="weight_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="weight"
                          >
                            Product Weight{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="e.g. 100"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        <div id="product_stock_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_stock"
                          >
                            Product Stock{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="number"
                            name="product_stock"
                            id="product_stock"
                            placeholder="e.g. 50"
                            onBlur={(e) => handleChange(e)}
                          />
                        </div>
                        </div>
                        {/*  */}
                        {/*  badge and rating  start*/}
                        <div className="flex justify-between items-center md:flex-row flex-col gap-4">
                        <div id="product_badge_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="product_badge"
                          >
                            Product badge{" "}
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <select
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="text"
                            name="product_badge"
                            id="product_badge"
                            onBlur={(e) => handleChange(e)}
                          >
                              <option defaultValue="choose" disabled>Choose a badge</option>
                                <option value="New">New</option>
                                <option value="Sale">Sale</option>
                                <option value="Hot">Hot</option>
 
                          </select>
                        </div>
                        <div id="user_rating_container" className="flex flex-col w-full">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="vendor_name"
                          >
                            User Rating
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                           pattern="[1-5]"  
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            required
                            type="number"
                            name="user_rating"
                            id="user_rating"
                            onBlur={(e) => handleChange(e)}
                            min="1"
                            max="5"
                            placeholder="Select a rating"
                          />
                        </div>
                        </div>
                        {/* badge and rating end */}
                        <div id="produc_Details_container" className="flex flex-col my-4">
                          <label
                            className="font-semibold text-lg text-gray-700"
                            htmlFor="productDetails"
                          >
                            Product Details
                            <span className="text-red-500 font-semibold">
                              {" "}
                              *
                            </span>
                          </label>
                          <textarea
                             className="border rounded-md border-slate-300 focus:outline-gray-400  text-slate-700 p-2 bg-gray-100 focus:bg-white"
                            type="productDetails"
                            name="produc_Details"
                            id="produc_Details"
                            placeholder="Write details here"
                            rows="6"
                            onBlur={(e) => handleChange(e)}
                          ></textarea>
                        </div>
                        <div className="pt-3">
                          <button
                            className="w-full block font-semibold rounded-md primary-bg-color hover:bg-green-600 text-white uppercase text-lg mx-auto px-4 py-2"
                            type="submit"
                          >
                            Add Product
                          </button>
                          <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
