import AuthProvider from '../src/context/AuthProvider';
import '../styles/globals.css';
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <ScrollToTop smooth />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
