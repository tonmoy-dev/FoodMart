import React, { useState } from "react";
import swal from "sweetalert";

import { useForm, ValidationError } from '@formspree/react';

const OfferModal = ({ handleModal }) => {
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
  //   swal("Good job!", "You subscribed successfully!", "success");
  //   }
  // };
  const [state, handleSubmit] = useForm("xgedkber");
  if (state.succeeded) {
    swal("Wow!", "Thanks for subscribing us.", "success");
  }
  return (
    <div className="absolute left-0 right-0 z-50">
      <style>
        {`
               .modal-card{
                background: linear-gradient(to right, #f1f1f1 , rgba(255,255,255,0.2)), url("https://i.ibb.co/pjDVZf2/hero-img-1-1.jpg");
                background-repeat: "no-repeat";
                background-size:"cover";
                width:700px;
            }
               .modal-subtitle{
                   letter-spacing: 14px;
               }
                `}
      </style>
      <div className="modal-container h-screen flex justify-center items-center mx-4 lg:mx-0 md:mx-0">
        <div className="modal-card relative w-3/6 h-96 flex flex-col justify-center pl-6 md:pl-20 lg:pl-20 rounded shadow-lg">
          <div
            onClick={handleModal}
            className="absolute top-0 right-0 px-4 py-2 m-4 cursor-pointer text-2xl hover:text-lime-600 rounded"
          >
            x
          </div>
          <p className="text-lg modal-subtitle text-black">Top SELLING</p>
          <h1 className="text-5xl my-4">
            ORGANIC FOOD <br />
            <span className="text-orange-500 font-semibold">20%</span> OFF
          </h1>
          <p className="w-3/4">
            Join over 1,000 people who get free and fresh content delivered
            automatically each time we publish.
          </p>
          <form
            // onSubmit={handleSubmission}
            onSubmit={handleSubmit}
            className="py-4 flex flex-row">
            <input
              name="subscribedemail"
              className="bg-transparent w-1/2 text-lime-600 border border-gray-400 focus:border-lime-600 focus:ring-0 pl-2"
              type="email"
              required
              placeholder="Type your email here"
              pattern=".+@gmail\.com"
            />
            <button
              type="submit"
              className="bg-lime-600 transition hover:bg-lime-700 font-semibold text-white px-6 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
