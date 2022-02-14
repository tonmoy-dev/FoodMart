import Head from 'next/head';
import Image from 'next/image';
import Banner from '../src/Components/Home/Banner/Banner';
import BestSells from '../src/Components/Home/BestSells/BestSells';
import Categories from '../src/Components/Home/Categories/Categories';
import Footer from '../src/Components/Home/Footer/Footer';
import Login from '../src/Components/Login/Login';
import Navbar from '../src/Components/Home/Navbar/Navbar';
import PopularProducts from '../src/Components/Home/PopularProducts/PopularProducts';
import Reviews from '../src/Components/Home/Reviews/Reviews';
import styles from '../styles/Home.module.css';
import Register from '../src/Components/Register/Register';

export default function Home({products}) {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Categories></Categories>
        <PopularProducts products={products}></PopularProducts>
        <BestSells products={products}></BestSells>
        <Reviews></Reviews>
        <Footer></Footer>
        {/* <Login></Login>
        <Register></Register> */}
      </div>

    </>
  );
}

export async function getStaticProps() {

  const res = await fetch('https://foodmart11.herokuapp.com/products')
  const products = await res.json()


  return {
    props: {
      products,
    },
  }
}