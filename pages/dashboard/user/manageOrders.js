import Footer from "../../../src/Components/Home/Footer/Footer";
import Navbar from "../../../src/Components/Home/Navbar/Navbar";
import ManageOrders from "../../../src/Components/ManageOrders/ManageOrders";

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
