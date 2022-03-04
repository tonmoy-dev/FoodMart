import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import Address from "../../../src/Components/Dashboard/User/Checkout/Address/Address";
import CheckoutProductList from "../../../src/Components/Dashboard/User/Checkout/CheckoutProductList/CheckoutProductList";
import Payment from "../../../src/Components/Dashboard/User/Checkout/Payment/Payment";
import DashAdminMenu from "../DashMenu/DashAdminMenu";

const Checkout = ({ products }) => {
    return (
 <>
      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 1px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: darkcyan;
          }
        `}
      </style>
      <div id="dashboard-container" className="h-screen bg-gray-100">
        {/* top bar */}
        <DashAdminMenu />



        {/* main content */}
        <div id="main-content" className="pt-24 pr-8 pl-8 lg:pl-80">

                    <div>
                        <div className=" min-w-screen min-h-screen bg-gray-200 flex flex-col text-center justify-center align-middle mx-auto px-5 md:px-20">
                            <div className="my-10">
                                <h1 className="text-gray-700 font-semibold text-4xl text-left pt-6 pb-2">
                                    Checkout Payment Page
                                </h1>
                                {/* breadcrumb */}
                                <div className="pb-4">
                                    <nav className="flex" aria-label="Breadcrumb">
                                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                            <li className="inline-flex items-center">
                                                <a
                                                    href="#"
                                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                                >
                                                    <HomeIcon
                                                        className="h-4 w-4 text-gray-700 mr-2"
                                                        aria-hidden="true"
                                                    />
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <ChevronRightIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <a
                                                        href="#"
                                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        Dashboard
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <ChevronRightIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <a
                                                        href="#"
                                                        className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                                    >
                                                        User
                                                    </a>
                                                </div>
                                            </li>
                                            <li aria-current="page">
                                                <div className="flex items-center">
                                                    <ChevronRightIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                                                        Checkout
                                                    </span>
                                                </div>
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className=" md:flex xl:flex-row lg:flex-row md:flex-col justify-center">
                                    <div className="w-76 mt-6 flex items-center justify-center md:px-5 pt-10">
                                        <div className="md:flex sm:flex-col md:flex-row w-full mx-auto  bg-white rounded-lg shadow-lg py-5 text-gray-700">
                                            <Address products={products}></Address>
                                            <Payment></Payment>
                                        </div>
                                    </div>
                                    <div className="md:px-5">
                                        <CheckoutProductList
                                            products={products}
                                        ></CheckoutProductList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



        </div>

      </div>
    </>





       
    );
};

export default Checkout;

export async function getStaticProps() {
    const products_res = await fetch(
        "https://foodmart-server.herokuapp.com/products"
    );
    const products = await products_res.json();

    return {
        props: { products },
    };
}
