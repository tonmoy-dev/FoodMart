import ScrollToTop from "react-scroll-to-top";
import Footer from '../src/Components/Home/Footer/Footer';
import Example from '../src/Components/Home/Navbar/Navbar';
import '../styles/globals.css';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Example></Example>
      <ScrollToTop smooth />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
