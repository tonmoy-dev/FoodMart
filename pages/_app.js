import '../styles/globals.css';
import ScrollToTop from "react-scroll-to-top";
import Footer from '../src/Components/Home/Footer/Footer';
import Navbar from '../src/Components/Home/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <ScrollToTop smooth />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
