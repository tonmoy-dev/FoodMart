import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import swal from "sweetalert";
import addreviewStyle from "../../../src/styles/AddReview.module.css";
import DashAdminMenu from "../DashMenu/DashAdminMenu";
import { useRouter } from "next/router";
import BlogMarkdown from "../../../src/Components/Blogs/BlogMarkdown";
import DashVendorMenu from "../DashMenu/DashVendorMenu";
import DashUserMenu from "../DashMenu/DashUserMenu";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddReview = () => {
  const [control, setControl] = useState(false);
  const [isActive, setActive] = useState("false");
  const [isAActive, setAActive] = useState("false");
  const user = useSelector((state) => state.states.user);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    setControl(true);
    axios.get("/api/users").then(response => {
      setUsers(response.data);
      setLoading(false);
    });
  }, [control, user?.email]);

  const email = user?.email
  const userNow = users.filter(user => user.email === email)[0]

  const handleToggle = () => {
    setActive(!isActive);
  };
  // for mobile device
  const handleMenu = () => {
    setAActive(!isAActive);
  };

//   --------------------------------------------------
const [addReview, setAddReview] = useState({
  userName: "",
  userEmail: "",
  reviewTime: "",
  description: "",
  // Ratting: "",
  reviewDate: "",
});
// take ratting
const [Ratting,setRatingData] = useState(); 
const ratingChanged = (newRating) => {
  setRatingData(newRating.toString());
};
console.log(typeof Ratting);

// take image data
const [imageUrl, setImageUrl] = useState();
console.log(addReview)

const handleChange = (e) => {
  setAddReview({ ...addReview, [e.target.name]: e.target.value });
};

// submit all data into backend
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!imageUrl) {
    return null;
  }
  const {
    userName,
    userEmail,
    reviewTime,
    description,
    reviewDate,
  } = addReview;

  await axios
    .post("/api/reviews", {
      userName,
      userEmail,
      reviewTime,
      description,
      Ratting,
      reviewDate,
      imageUrl,
    })
    .then((res) => {
      if (res.data.insertedId) {
        setControl(!control);
        swal("Wow!", "Your add blog request has been received.", "success");
        router.push("/");
        e.target.reset();
      } else {
        setControl(false);
      }
    })
    .catch((err) => console.log(err.message));
};

//for image
const handleImage = (pics) => {
  if (pics.type === "image/jpeg" || pics.type === "image/png") {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "foodmart_preset");
    data.append("cloud_name", "foodmartshop");
    axios
      .post("https://api.cloudinary.com/v1_1/foodmartshop/image/upload", data)
      .then(({ data }) => {
        setImageUrl(data.url.toString());
          console.log(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  }
};


  return (
    <>
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
      <div id="dashboard-container" className="h-screen bg-gray-100">
        {/* top bar */}
        <DashUserMenu />

        {/* main content */}
        <div id="main-content" className="pt-24 pb-12 lg:pl-72 bg-gray-100">
          <div className="px-8">
          <h1 className=" text-black font-semibold text-2xl md:text-4xl pb-2">
              Add A Review
            </h1>
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
                          Add a review
                        </span>
                      </div>
                    </li>
                  </ol>
            </nav>

            <div className="bg-gray-100 mt-4">
              <div className="container mx-auto">
                <div className="bg-white border shadow-lg p-4 w-full rounded">
                  <form onSubmit={handleSubmit}
                  encType="multipart/form-data">
                    <div className="p-4">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                          <div id="username" className="w-full">
                            <label htmlFor="search" className="">
                              {" "}
                              <p className="text-black mt-2 w-28">Your Name</p>{" "}
                            </label>
                            <input
                              className="border w-full p-2 bg-gray-50 focus:bg-white focus:border"
                              id="search"
                              placeholder="EX: jhon Doe"
                              type="text"
                              name="userName"
                              required
                               onBlur={(e) => handleChange(e)}
                            />
                          </div>
                          <div id="reviwe-date" className="w-full">
                            <label htmlFor="search" className="">
                              {" "}
                              <p className="text-black mt-2">
                                Review Date
                              </p>{" "}
                            </label>
                            <input
                              className="border w-full p-2 bg-gray-50 focus:bg-white focus:border"
                              id="search"
                              placeholder="EX: 02/01/2022"
                              type="date"
                              name="reviewDate"
                              required
                               onBlur={(e) => handleChange(e)}
                            />
                          </div>
                        </div>

                      <div className="flex flex-col md:flex-row gap-4 items-center my-4">
                          <div className="w-full" id="email">
                            <label htmlFor="search" className="">
                              {" "}
                              <p className="text-black">Your Email</p>{" "}
                            </label>
                            <input
                             className="border w-full p-2 bg-gray-50 focus:bg-white focus:border"
                              id="search"
                              placeholder="Example@gmail.com"
                              type="email"
                              name="userEmail"
                              required
                               onBlur={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="w-full" id="reviewTime">
                            <label htmlFor="search" className="">
                              {" "}
                              <p className="text-black">
                                Review Time
                              </p>{" "}
                            </label>
                            <input
                               className="border w-full p-2 bg-gray-50 focus:bg-white focus:border"
                              id="search"
                              placeholder="EX: 8.00am"
                              type="time"
                              name="reviewTime"
                              required
                               onBlur={(e) => handleChange(e)}
                            />
                          </div>
                      </div>

                      <div id="image" className="pb-2">
                        <label htmlFor="search" className="">
                          {" "}
                          <p className="text-black mt-2">Image Url</p>{" "}
                        </label>
                        <input
                          className="w-full p-2 rounded-md text-black border bg-gray-50 focus:bg-white focus:border"
                          id="search"
                          type="file"
                          name="imageUrl"
                          required
                          onChange={(e) => handleImage(e.target.files[0])}
                        />
                      </div>

                      <div className="rate flex md:flex-row justify-between gap-2 border items-center px-2 my-4 bg-gray-50 focus:bg-white focus:border">
                        <h2 className="text-black md:text-lg text-md">
                          How you feel this products?
                        </h2>
                        <ReactStars
                          classNames="text-lime-600 bg-gray-50 focus:bg-white focus:border"
                          count={5}
                          onChange={ratingChanged}
                          size={25}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#2CCD72"
                          name="Ratting"
                          required
                         
                        />
                      </div>

                      <h2 className="text-black text-md mt-4">
                        Reviews
                      </h2>
                      <div className="border ">
                        <textarea
                          className="w-full bg-gray-50 focus:bg-white focus:border px-2"
                          id="comment"
                          cols="20"
                          rows="4"
                          placeholder="Write Comment..."
                          name="description"
                          required
                           onBlur={(e) => handleChange(e)}
                        ></textarea>
                      </div>
                      <div className="flex justify-center align-middle">
                        <button
                          type="submit"
                          className="mt-3 w-full md:w-1/4 py-2 text-md font-semibold text-white  primary-bg-color hover:bg-lime-600"
                        >
                          Add Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReview;
