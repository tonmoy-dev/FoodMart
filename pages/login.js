import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GoogleButton from 'react-google-button';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import useFirebase from "../src/Authenticaion/hooks/useFirebase";

const Login = () => {
  const { signWithEmailPass, googleSign, logOut } = useFirebase();
  const [showPass, setShowPass] = React.useState(false);

  const emailLoginErrorMsg= useSelector((state) => state.states.emailPassLoginError);
  const googleLoginErrorMsg= useSelector((state) => state.states.googleLoginError);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signWithEmailPass(data.email, data.password);
  };

  const handleHidePass = () => {
    setShowPass(true);
  };

  const handleShowPass = () => {
    setShowPass(false);
  };

  return (
    <div className="px-4">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="flex my-12 md:mx-auto md:flex-row flex-col container shadow-md md:bg-white" >
        <div className="md:w-full md:table hidden bg-gray-50">
          <Image
            src="https://i.ibb.co/zbdQbkP/Mobile-login-rafiki.png"
            height="700"
            width="700"
            alt="Login image"
          />
        </div>
        <div className="md:w-full py-2 md:py-0 border md:border-0 px-8 w-full mx-auto flex flex-col gap-y-4 md:border-l">
          <div className="text-center">
          <h2 className="md:text-3xl text-2xl font-semibold mb-3 text-gray-700">
            Get&apos;s Start
          </h2>
          <p className="text-gray-700">Please login using account detail bellow.</p>
          </div>
          {/* login-form */}
          <form onSubmit={handleSubmit(onSubmit)}>
              <label
                  htmlFor="email"
                  className="text-gray-700"
                >
                 Email Adress
                </label>
            <input
              {...register("email", { required: true })}
              className="w-full border focus:outline-0 focus:bg-gray-50 border-gray-300 dark:bg-white dark:text-black h-12 py-4 pl-4 rounded-md"
              placeholder="emajhon@gmail.com"
            ></input>
            <div className="relative mt-4">
            <label
                  htmlFor="password"
                  className="text-gray-700"
                >
                 Password
                </label>
              <input
                {...register("password", { required: true })}
                type={showPass ? "text" : "password"}
                className="w-full border focus:outline-0 focus:bg-gray-50 border-gray-300 dark:bg-white dark:text-black h-12 py-4 pl-4 rounded-md"
                placeholder="********************"
              ></input>
              <i
                onClick={showPass ? handleShowPass : handleHidePass}
                className={
                  showPass
                    ? "fa-solid  fa-eye absolute dark:text-black right-5 top-10 cursor-pointer"
                    : "fa-solid  fa-eye-slash absolute dark:text-black  right-5 top-10 cursor-pointer"
                }
              />
            </div>

            <div className="flex items-center md:flex-row justify-between py-3 my-2">
              <span>
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded mt-1"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-700 pl-2"
                >
                  Remember me
                </label>
              </span>
              <span>
                <a className="text-gray-700 pl-6" href="#">
                  Forgot your Password?
                </a>
              </span>
            </div>
            <button
              type="submit"
              className="w-full h-12 font-semibold rounded primary-bg-color text-white"
            >
              Login
            </button>
          </form>
          <p className="text-center text-xl font-semibold">Or</p>
          <GoogleButton className="mx-auto pr-12" style={{width:'100%'}} label='Sign in with Google' type="dark" onClick={googleSign} />
          <p className="text-gray-400 py-3 font-semibold text-center">
            Don&apos;t have account?
            <Link passHref href="register">
              <a className="text-orange-500	pl-1">Register Now</a>
            </Link>
          </p>
          <div className="text-center">
            <p className="font-bold text-xl text-red-600">{emailLoginErrorMsg || googleLoginErrorMsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;