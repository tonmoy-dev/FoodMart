import Banner from '../src/Components/Home/Banner/Banner';
import BestSells from '../src/Components/Home/BestSells/BestSells';
import Blogs from '../src/Components/Home/Blogs/Blogs';
import Brands from '../src/Components/Home/Brands/Brands';
import Categories from '../src/Components/Home/Categories/Categories';
import DeliverySteps from '../src/Components/Home/DeliverySteps/DeliverySteps';
import Footer from '../src/Components/Home/Footer/Footer';
import Navbar from '../src/Components/Home/Navbar/Navbar';
import NewsLetter from '../src/Components/Home/NewsLetter/NewsLetter';
import PopularProducts from '../src/Components/Home/PopularProducts/PopularProducts';
import ProductOffer from '../src/Components/Home/ProductOffer/ProductOffer';
import Reviews from '../src/Components/Home/Reviews/Reviews';


export default function Home({reviews, products,blogs}) {
  return (
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
      <Categories></Categories>
      <ProductOffer></ProductOffer>
        <PopularProducts products={products}></PopularProducts>
        <BestSells products={products}></BestSells>
        <Blogs blogs={blogs}></Blogs>
      <DeliverySteps></DeliverySteps>
        <Reviews reviews={reviews}></Reviews>
        <Brands></Brands>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
      </div>
  );
}


export async function getStaticProps() {
  const reviews_res = await fetch('http://foodmart11.herokuapp.com/reviews');
  const reviews = await reviews_res.json();

  const products_res = await fetch('http://foodmart11.herokuapp.com/products');
  const products = await products_res.json();

  const blogs_res = await fetch('http://foodmart11.herokuapp.com/blogs');
  const blogs = await blogs_res.json();

  return {
    props:{reviews,products,blogs}
  }
}
