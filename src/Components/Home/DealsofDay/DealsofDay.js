import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCartProducts} from "../../../redux/slices/productSlice";

const DealsofDay = () => {
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const user = useSelector((state) => state.states.user);
  

  let intervel = useRef();

  const startTimer = () => {
    const countdownDate = new Date("April 01, 2022 00:00:00").getTime();

    intervel = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop all timer
        clearInterval(intervel.current);
      } else {
        //start
        setDays(days);
        setHours(hours);
        setMin(mintues);
        setSec(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervel.current);
    };
  });


  const addToCartHandler = async (title, image, price, description) => {
    axios.post("/api/cart", {
        title: title,
        image: image,
        price: price,
        description: description,
        email: user.email,
        quantity:1
      })
      .then((response) => {
        console.log(response)
        if (response.data.insertedId) {
          setControl(true);
          dispatch(fetchCartProducts(user));
          toast.success('Wow! Added to your cart.', {
            position: "bottom-left"
          });
          setControl(false)
        }
      });
  };

  const fakeArr = [
    {
      id: "1",
      title: "Offer 100% Fresh organic food",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      price:"32",
      description:"Diploma Instant Full Cream Milk Powder provides all the cooking benefits of fresh full cream milk in a convenient powdered form.No need to refrigerate and it’s simple and easy to use – just add water for instant milk.A useful flavour enhancer for soups, creamy sauces, curries or desserts.",
      image: "https://i.ibb.co/nbYmKw9/4-600x379.jpg",
    },
    {
      id: "21",
      title: "Premium and 100% Fresh Mangoes",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      price:"35",
      description:"Diploma Instant Full Cream Milk Powder provides all the cooking benefits of fresh full cream milk in a convenient powdered form.No need to refrigerate and it’s simple and easy to use – just add water for instant milk.A useful flavour enhancer for soups, creamy sauces, curries or desserts.",
      image: "https://i.ibb.co/HrLJfR1/10.jpg",
    },
    {
      id: "13",
      title: "Seeds of Change Organic Quinoa",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      price:"22",
      description:"Diploma Instant Full Cream Milk Powder provides all the cooking benefits of fresh full cream milk in a convenient powdered form.No need to refrigerate and it’s simple and easy to use – just add water for instant milk.A useful flavour enhancer for soups, creamy sauces, curries or desserts.",
      image: "https://i.ibb.co/cTsQ8zG/banner-7.png",
    },
    {
      id: "15",
      title: "Vegetables Big Sale Fresh Farm Products",
      days: "1122",
      hours: "02",
      mins: "42",
      sec: "12",
      price:"42",
      description:"Diploma Instant Full Cream Milk Powder provides all the cooking benefits of fresh full cream milk in a convenient powdered form.No need to refrigerate and it’s simple and easy to use – just add water for instant milk.A useful flavour enhancer for soups, creamy sauces, curries or desserts.",
      image: "https://i.ibb.co/nfp2zV0/7blog.jpg",
    },
  ];

  const {
    title,
    image,
    description,
    price
  } = fakeArr;
  return (
    <div>
      <div className="container mx-auto pt-10 px-4 md:px-0">
        <div className="flex md:flex-row  flex-col md:items-center md:justify-between justify-center items-center pb-5">
          <h1 className="md:text-3xl lg:text-3xl text-3xl font-bold">
            Deals of the week
          </h1>
          <p>Hurry up! limited stocked</p>
        </div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mb-10 py-4">
          {fakeArr.map((card) => (
            <div
              style={{ height: "auto" }}
              id="deals-card"
              key={card.id}
              className="relative rounded-md"
            >
              <div id="deals-card-image-wrap" className="relative z-2">
                <div className="deals-card-image relative">
                  <Image
                    layout="responsive"
                    width={700}
                    height={600}
                    src={card.image}
                    alt="Avatar"
                    className="rounded-md"
                  />
                </div>
              </div>

              <div
                style={{ marginTop: "-90px", zIndex: 3 }}
                id="card-content"
                className="relative px-2 w-full"
              >
                <div
                  style={{ top: "-80px" }}
                  id="deals-count-down"
                  className="absolute w-full left-0 right-0"
                >
                  <div className="flex flex-row gap-2 justify-center">
                    <div className="bg-white px-2 shadow-md py-2 text-center primary-color font-semibold rounded-md">
                      {days} <br /> <span className="text-gray-400">Days</span>
                    </div>
                    <div className="bg-white px-2 shadow-md py-2 text-center primary-color font-semibold rounded-md">
                      {hours} <br />{" "}
                      <span className="text-gray-400">Hours</span>
                    </div>
                    <div className="bg-white px-2 shadow-md py-2 text-center primary-color font-semibold rounded-md">
                      {min} <br /> <span className="text-gray-400">Mins</span>
                    </div>
                    <div className="bg-white px-3 shadow-md py-2 text-center primary-color font-semibold rounded-md">
                      {sec} <br /> <span className="text-gray-400">Sec</span>
                    </div>
                  </div>
                </div>
                <div
                  id="deals-details"
                  className="bg-white shadow-md rounded-md px-4 mt-4"
                >
                  <h4 className="text-base font-semibold pt-2">
                    {card.title.slice(0, 30)}
                  </h4>
                  <ul className="flex items-center py-2">
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>
                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="w-4 text-yellow-300 mr-1"
                        role="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                        ></path>
                      </svg>
                    </li>

                    <li>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="star"
                        className="w-4 text-yellow-300"
                        role="image"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <div className="flex items-center  justify-between py-6">
                    <h4 className="text-lg font-semibold text-green-500">
                      {card.price}
                      <sub className="pl-2 text-gray-500">
                        <strike>$32.85</strike>
                      </sub>
                    </h4>
                    <a
            href="#"
            onClick={() =>
              addToCartHandler(
                card.title,
                card.image,
                card.price,
                card.description
              )
            }
            className="text-green-500 bg-white shadow  rounded-full hover:bg-green-500 focus:ring-0 p-3 border-2 hover:text-white"
          >
            <FaCartPlus className="w-6 h-6"/>
          </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsofDay;
