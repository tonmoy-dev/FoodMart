import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import swal from "sweetalert";
import addreviewStyle from "../../../src/styles/AddReview.module.css";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const AddReview = () => {

  const [addReview, setAddReview] = useState({});

  const handleInputOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...addReview };
    newReviewData[field] = value;
    setAddReview(newReviewData);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    // post blog data
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addReview),
    });
    const data = await res.json();
    if (data.insertedId) {
      swal("Good job!", "SUBMITED", "success");
      // router.push('/');
      // const newComments = comments;
      // newComments.push(addReview);
      // setComments(newComments);
      e.target.reset();
    }
  };
  




  return (
    <div className="m-10">
      <h1 className=" text-black font-semibold text-3xl pb-2">Add Review</h1>
      {/* breadcrumb */}
      <div className="pb-10">
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
                <Link href="/">Home</Link>
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
                  User
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
                  Add Review
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div>
        <div>
          <h2 className="text-3xl font-semibold text-black text-center">
            Give your review
          </h2>
        </div>
        <div className={addreviewStyle.content}>
          <div className={addreviewStyle.reviewcontainer}>
            <form onSubmit={handleSubmission}>
              <div className="p-8">
                <div className="flex ">
                  <div className="flex flex-col">
                    <div>
                      <label htmlFor="search" className="">
                        {" "}
                        <p className="text-black mt-2">Your Name</p>{" "}
                      </label>
                      <input
                        className={addreviewStyle.sss}
                        id="search"
                        placeholder="EX: jhon Doe"
                        type="text"
                        name="userName"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <div>
                      <label htmlFor="search" className="">
                        {" "}
                        <p className="text-black mt-2">Review Date</p>{" "}
                      </label>
                      <input
                        className={addreviewStyle.sss}
                        id="search"
                        placeholder="EX: 02/01/2022"
                        type="date"
                        name="reviewDate"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="search" className="">
                        {" "}
                        <p className="text-black mt-2">Your Email</p>{" "}
                      </label>
                      <input
                        className={addreviewStyle.sss}
                        id="search"
                        placeholder="Example@gmail.com"
                        type="email"
                        name="userEmail"
                        onBlur={handleInputOnBlur}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <div>
                      <label htmlFor="search" className="">
                        {" "}
                        <p className="text-black mt-2">Review Time</p>{" "}
                      </label>
                      <input
                        className={addreviewStyle.sss}
                        id="search"
                        placeholder="EX: 8.00am"
                        type="time"
                        name="reviewTime"
                        onBlur={handleInputOnBlur}
                      />
                    </div>
                  </div>
                </div>
                <div>
                      <label htmlFor="search" className="">
                        {" "}
                        <p className="text-black mt-2">Image Url</p>{" "}
                      </label>
                      <input
                        className={addreviewStyle.sss}
                        id="search"
                        type="text"
                        name="imageUrl"
                        onBlur={handleInputOnBlur}
                      />
                    </div>

                <div className="rate flex mt-4 gap-2">
                  <h2 className="mt-5 text-black text-xl font-extralight">
                    Product Rating
                  </h2>
                  <ReactStars
                    classNames="text-green-500"
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#2CCD72"
                    name="Ratting"
                    onBlur={handleInputOnBlur}
                  />
                </div>

                <h2 className="text-black font-extralight text-xl">Reviews</h2>

                <div className={addreviewStyle.inputsfield}>
                  <textarea
                    className={addreviewStyle.sds}
                    id="comment"
                    cols="20"
                    rows="4"
                    placeholder="Write Comment..."
                    name="description"
                        onBlur={handleInputOnBlur}
                  ></textarea>
                </div>
                <div className="flex justify-center align-middle">
                  <button
                    type="submit"
                    className=" px-24 mt-3 py-2 text-xl font-semibold text-white bg-green-500"
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
  );
};

export default AddReview;
