import CategoryList from "../../../src/Components/CategoryList/CategoryList";
import Footer from "../../../src/Components/Home/Footer/Footer";
import Navbar from "../../../src/Components/Home/Navbar/Navbar";

const categorylist = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CategoryList></CategoryList>
            <Footer></Footer>
        </div>
    );
};

export default categorylist;
