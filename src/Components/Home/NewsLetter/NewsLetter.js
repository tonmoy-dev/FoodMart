import React, { useState } from "react";
import swal from "sweetalert";
import { useForm, ValidationError } from '@formspree/react';

const NewsLetter = () => {
  // const [addEmail, setAddEmail] = useState({});
  // const handleInputOnBlur = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newAddData = { ...addEmail };
  //   newAddData[field] = value;
  //   setAddEmail(newAddData);
  // };

  // const handleSubmission = async (e) => {
  //   e.preventDefault();
  //   const newEmail = { ...addEmail };
  //   setAddEmail(newEmail);

  //   // post blog data
  //   const res = await fetch("/api/emailcollection", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(addEmail),
  //   });
  //   const data = await res.json();
  //   if (data.insertedId) {
  //     e.target.reset();
  //     swal("Good job!", "You subscribed successfully!", "success");
  //   }
  // };
  const [state, handleSubmit] = useForm("xgedkber");
  if (state.succeeded) {
    swal("Wow!", "Thanks for subscribing us.", "success");
  }
  return (
    <div>
      <style jsx>
        {`
          .newsletter {
            // background: #f3f4f6;
            background: url("https://i.ibb.co/82j6Rvf/banner-1-f884a64d-39d6-44a8-882e-dc7e15c332aa.jpg");
            background-size: cover;
          }
        `}
      </style>
      <div className="newsletter py-8 border-b ">
        <div>
          <div>
            <h1 className="primary-color mt-4  text-3xl font-semibold text-center">
              Sign up for the NewsLetter
            </h1>
          </div>
        </div>

        <div className="flex justify-center px-4 footer">
          <div className="container py-6">
            <h1 className="text-lg text-gray-600  text-center">
              Join 31,000+ other and never miss out on new tips, products, and
              more....
            </h1>

            <div className="flex justify-center mt-6">
              <div className="bg-white border rounded-full focus:ring-0">
                <form
                  // onSubmit={handleSubmission}
                  onSubmit={handleSubmit}
                  className="flex justify-between flex-row"
                >
                  <input
                    name="subscribedemail"
                    // onBlur={handleInputOnBlur}
                    id="email"
                    type="email"
                    className="p-2 m-1 text-sm rounded-full text-gray-700 bg-transparent border-0 appearance-none focus:outline-none focus:ring-gray-300"
                    placeholder="Enter your email address"
                    aria-label="Enter your email address"
                    required
                    pattern=".+@gmail\.com"
                  />
                  <button
                    type="submit"
                    className="w-full px-3 py-2 m-1  text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform primary-bg-color rounded-full lg:w-auto hover:bg-green-600"
                  >
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
