import Navbar from "../src/Components/Home/Navbar/Navbar";
import Footer from "../src/Components/Home/Footer/Footer";
import Wishlist from "../src/Components/Wishlist/Wishlist";

const wishlist = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Wishlist></Wishlist>
            <Footer></Footer>
        </div>
    );
};

export default wishlist;
