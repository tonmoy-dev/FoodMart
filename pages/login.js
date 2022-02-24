import Image from 'next/image';
import React, { useState } from 'react';
import useAuth from '../src/hooks/useAuth';


const Login = (logimData) => {


    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading, signInWithGoogle, logOut } = useAuth();
    // const { user, logOut, signInWithGoogle } = useAuth();
    // snack bar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // redirects
    // const location = useLocation();
    // const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }




    // const { logout } = useAuth();
    // const { signInWithGoogle } = useFirebase();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        console.log("From Login", user);
    }
    console.log("From Login", user);
    console.log("From login data:", loginData);

    return (
        <div className=" h-screen w-screen  ">
            {/* <div className="bg-green-500 mx-auto h-96 w-96 flex flex-col justify-center items-center">
                <button onClick={handleGoogleSignIn} className="py-2 px-3 bg-sky-500 rounded-lg border hover:bg-sky-700 text-white font-bold hover:border-black " > Sign in with Google </button>
            </div> */}
            <div className='  flex flex-col items-center justify-center mx-auto'>

                <div className="flex flex-col md:flex-row items-center justify-center ">
                    <div className="px-5 mx-10  mt-4 text-left    rounded-lg">
                        <div className="flex flex-col items-center justify-center">

                            <h3 className="block text-2xl font-bold text-center">Welcome To </h3>
                            <br />
                            <Image className='block' src="https://i.ibb.co/hKfBmFG/logo-1.png" height="100" width="300" alt="logo"></Image>
                            <br />
                            <h3 className="block text-base font-bold text-center text-green-800">An initiative by winning devs</h3>
                        </div>


                    </div>

                    <div className="px-8 py-6 mx-10 mt-4 text-left bg-white shadow-lg rounded-lg">

                        <div className="p-5 bg-black">
                            {user?.displayName && <h1 className="text-white" >{user?.displayName}</h1>

                            }
                        </div>
                        <h3 className="text-2xl font-bold text-center">Sign in to your account</h3>
                        <form action="">
                            <div className="mt-4">
                                <div>

                                    <label htmlFor="email" className="block" name="Email" > Email </label>
                                    <input name="email" onBlur={handleOnBlur} type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
                                    {/* <label  className="block" name="Email" > Email </label>
                                    <input type="text" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" /> */}
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="password" className="block" name="Password" > Password </label>

                                    <input name="password" onBlur={handleOnBlur} type="password" placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" />
                                    {/* 
                                    <label className="block" name="Password" > Password </label>

                                    <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" /> */}
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <button onClick={handleLoginSubmit} className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-900">Sign in</button>
                                    <a href="#" className="text-sm text-green-600 hover:underline">Forgot password?</a>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm">Do not have an account? please </p> <a className="text-sm hover:text-sm text-green-600 hover:text-green-800 hover:underline">Sign up</a>
                                </div>

                                <div className='p-5 text-center'>
                                    <h1 className='font-bold text-black'>Or</h1>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleGoogleSignIn} className="py-2 px-3 bg-orange-400 rounded-lg border hover:bg-sky-700 text-white font-bold hover:border-black " > Sign in with Google </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;