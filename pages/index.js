// import MessengerCustomerChat from "react-messenger-customer-chat";
import { useEffect, useState } from "react";
import Banner from "../src/Components/Home/Banner/Banner";
import BestSells from "../src/Components/Home/BestSells/BestSells";
import Blogs from "../src/Components/Home/Blogs/Blogs";
import Brands from "../src/Components/Home/Brands/Brands";
import Categories from "../src/Components/Home/Categories/Categories";
import DealsofDay from "../src/Components/Home/DealsofDay/DealsofDay";
import DeliverySteps from "../src/Components/Home/DeliverySteps/DeliverySteps";
import NewsLetter from "../src/Components/Home/NewsLetter/NewsLetter";
import PopularProducts from "../src/Components/Home/PopularProducts/PopularProducts";
import ProductOffer from "../src/Components/Home/ProductOffer/ProductOffer";
import Reviews from "../src/Components/Home/Reviews/Reviews";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import OfferModal from "../src/Components/OfferModal/OfferModal";

export default function Home({ reviews, products, blogs }) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setOpenModal(true);
    setTimeout(() => {
      setOpenModal(false);
    }, 3000);
  }, []);
  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="">
      {/* {!openModal && (
        <div className="fixed transition top-0 modal-overlay h-screen w-full z-50">
          <OfferModal handleModal={handleModal}></OfferModal>
          <style>
            {`.modal-overlay{
            background: rgba(0, 0, 0, 0.5);
          }`}
          </style>
        </div>
      )} */}
      <Banner></Banner>
      <PopularProducts products={products}></PopularProducts>
      <DealsofDay></DealsofDay>
      <BestSells products={products}></BestSells>
      <Categories></Categories>
      <ProductOffer></ProductOffer>
      <DeliverySteps></DeliverySteps>
      <Reviews reviews={reviews}></Reviews>
      <Blogs blogs={blogs}></Blogs>
      <Brands></Brands>
      <NewsLetter></NewsLetter>

    
    </div>
  );
}

export async function getStaticProps() {
  const reviews_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/reviews`);
  const reviews = await reviews_res.json();

  const products_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
  const products = await products_res.json();

  const blogs_res = await fetch(`${process.env.MY_APP_DOMAIN}/api/blogs`);
  const blogs = await blogs_res.json();

  return {
    props: { reviews, products, blogs },
  };
}
