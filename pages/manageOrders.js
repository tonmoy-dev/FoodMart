import Navbar from "../src/Components/Home/Navbar/Navbar";
import Footer from "../src/Components/Home/Footer/Footer";
import ManageOrders from "../src/Components/ManageOrders/ManageOrders";

const manageOrders = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ManageOrders></ManageOrders>
            <Footer></Footer>
        </div>
    );
};

export default manageOrders;
