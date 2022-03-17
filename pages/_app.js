import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../src/Components/Home/Footer/Footer";
import Example from "../src/Components/Home/Navbar/Navbar";
import Preloader from "../src/Components/Preloader/Preloader";
import { store } from "../src/redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="overflow-hidden">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen loader-body">
          <Preloader></Preloader>
          <h1 className="text-green-500 font-bold text-lg uppercase">
            food<span className="text-orange-500">mart</span>
          </h1>
          <style jsx>
            {`
              .loader-body {
                background: #f8f5f0;
              }
            `}
          </style>
        </div>
      ) : (
        <Provider store={store}>
          <Example></Example>
          <ScrollToTop smooth />
          <Component {...pageProps} />
          <Footer></Footer>
        </Provider>
      )}
    </div>
  );
}

export default MyApp;
