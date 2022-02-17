import Navbar from "../src/Components/Home/Navbar/Navbar";
import Footer from "../src/Components/Home/Footer/Footer";
import AccountDetails from "../src/Components/AccountDetails/AccountDetails";

const accountDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AccountDetails></AccountDetails>
            <Footer></Footer>
        </div>
    );
};

export default accountDetails;
