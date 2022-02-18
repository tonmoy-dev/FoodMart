import CouponsList from "../../../src/Components/CouponsList/CouponsList";
import Footer from "../../../src/Components/Home/Footer/Footer";
import Navbar from "../../../src/Components/Home/Navbar/Navbar";

const couponslist = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CouponsList></CouponsList>
            <Footer></Footer>
        </div>
    );
};

export default couponslist;
