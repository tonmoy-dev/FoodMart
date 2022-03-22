import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirebase from "../src/Authenticaion/hooks/useFirebase";

const Register = () => {
  const errorMsg = useSelector((state) => state.states.registerError);

  const { registerWithEmailPass } = useFirebase();

  const [showPass, setShowPass] = React.useState(false);
  const [showPassConfirm, setShowPassConfirm] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmPass) {
      registerWithEmailPass(data?.email, data?.password, data?.displayName);
      toast("Wow password matched!");
      reset();
    } else {
      toast("Oops! password dosen't match");
    }
  };

  const handleHideConfirm = () => {
    setShowPassConfirm(true);
  };

  const handleShowConfirm = () => {
    setShowPassConfirm(false);
  };

  const handleHidePass = () => {
    setShowPass(true);
  };

  const handleShowPass = () => {
    setShowPass(false);
  };

  
return (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Head>
    <div className="flex justify-center m-10 sm:mx-auto md:flex-row flex-col w-5/6">
      <div className="md:w-3/6">
        <Image
          src="https://i.ibb.co/zNTPWcd/online-registration-sign-up-concept-people-signing-login-to-account-user-interface-secure-password-v.jpg"
          height="600"
          width="700"
          alt="register image"
        />
      </div>
      <div className="md:w-2/5 w-11/12 mx-auto my-5 p-3 flex flex-col gap-y-4">
        <div className="mx-auto text-center">
        <h2 className="md:text-3xl text-2xl font-semibold mb-3">
          Create your account
        </h2>
        <p className="text-xl">Please Register using account detail bellow.</p>
        </div>
        {/* register-form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name-field */}
          <input
            {...register("displayName", { required: true })}
            className="w-full border border-gray-400 dark:bg-white dark:text-black h-14 py-4 pl-4 rounded-md"
            placeholder="Your Name"
          ></input>
          <input
            {...register("email", { required: true })}
            className="w-full border border-gray-400 dark:bg-white dark:text-black h-14 py-4 pl-4 rounded-md mt-5"
            placeholder="Your Email address"
          ></input>

          {/* password-filed */}
          <div className="relative">
            <input
              {...register("password", { required: true })}
              type={showPass ? "text" : "password"}
              className="w-full border border-gray-400 dark:bg-white dark:text-black h-14 py-4 pl-4 rounded-md mt-5"
              placeholder="Password"
            ></input>
            <i
              onClick={showPass ? handleShowPass : handleHidePass}
              className={
                showPass
                  ? "fa-solid fa-eye absolute dark:text-black  right-5 top-10"
                  : "fa-solid  fa-eye-slash absolute dark:text-black  right-5 top-10"
              }
            />
          </div>

          {/* confirm-password */}
          <div className="relative">
            <input
              {...register("confirmPass", { required: true })}
              type={showPassConfirm ? "text" : "password"}
              className="w-full border border-gray-400 dark:bg-white dark:text-black h-14 py-4 pl-4 rounded-md mt-5"
              placeholder="Confirm Password"
            ></input>
            <i
              onClick={showPassConfirm ? handleShowConfirm : handleHideConfirm}
              className={
                showPassConfirm
                  ? "fa-solid fa-eye absolute dark:text-black  right-5 top-10"
                  : "fa-solid  fa-eye-slash absolute dark:text-black   right-5 top-10"
              }
            />
          </div>

          <div className="flex py-3">
            <input id="remember" type="checkbox" className="w-4 h-4 rounded mt-1" />
            <label htmlFor="remember" className="text-gray-400 font-semibold pl-2">
              Accept Term and Conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full h-14 py-4 font-bold rounded-md bg-green-700 text-white"
          >
            Register
          </button>
        </form>
        <p className="text-gray-400 py-3 font-semibold text-center">
          Already have account?{" "}
          <Link passHref href="/login">
            <a className="text-orange-500	pl-1">Login Now</a>
          </Link>
        </p>
        <div className="text-center">
          <p className="text-red-500 font-bold">{errorMsg}</p>
        </div>
      </div>
    </div>
  </>
)
}

export default Register;