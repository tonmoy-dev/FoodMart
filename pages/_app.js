import ScrollToTop from "react-scroll-to-top";
import Footer from '../src/Components/Home/Footer/Footer';
import Example from '../src/Components/Home/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import '../styles/globals.css';
import { NextShield } from 'next-shield'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  return (

    <Provider store={store}>
      {/* <NextShield
        isAuth={true}
        isLoading={false}
        router={router}
        privateRoutes={['/dashboard/dashboard', '/control-panel']}
        publicRoutes={['/', '/login']}
        accessRoute="/dashboard/dashboard"
        loginRoute="/login"
        LoadingComponent={<p>Loading...</p>}
      > */}

        
      {/* <NextShield
        isAuth={true}
        isLoading={false}
        router={router}
        privateRoutes={['/dashboard/dashboard','/dashboard/admin/coupons-list',  '/control-panel']}
        publicRoutes={[ '/','/login']}
        accessRoute="/"
        loginRoute="/login"
        LoadingComponent={<p>Loading...</p>}
      > */}
        <Example></Example>
        <ScrollToTop smooth />
        <Component {...pageProps} />
        <Footer></Footer>
      {/* </NextShield> */}
    </Provider>

  )
}

export default MyApp
