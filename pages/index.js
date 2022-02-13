import Head from 'next/head';
import Image from 'next/image';
import Banner from '../src/Components/Home/Banner/Banner';
import BestSells from '../src/Components/Home/BestSells/BestSells';
import Categories from '../src/Components/Home/Categories/Categories';
import DeliverySteps from '../src/Components/Home/DeliverySteps/DeliverySteps';
import Footer from '../src/Components/Home/Footer/Footer';
import Navbar from '../src/Components/Home/Navbar/Navbar';
import PopularProducts from '../src/Components/Home/PopularProducts/PopularProducts';
import Reviews from '../src/Components/Home/Reviews/Reviews';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Categories></Categories>
        <PopularProducts></PopularProducts>
        <BestSells></BestSells>
        <DeliverySteps></DeliverySteps>
        <Reviews></Reviews>
        <Footer></Footer>
      </div>
    </>
  );
}
