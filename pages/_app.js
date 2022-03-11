import ScrollToTop from "react-scroll-to-top";
import Footer from '../src/Components/Home/Footer/Footer';
import Example from '../src/Components/Home/Navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Example></Example>
      <ScrollToTop smooth />
      <Component {...pageProps} />
      <Footer></Footer>
    </Provider>
  )
}

export default MyApp
