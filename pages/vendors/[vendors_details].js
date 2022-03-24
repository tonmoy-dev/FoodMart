import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaTwitterSquare,
} from "react-icons/fa";
import Product from "../../src/Components/Products/Product/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const VendorsDetails = (filteredProducts) => {
    const [vendors, setVendors] = useState([]);
    const [isLoading, setIsLoading] = useState();
    console.log(vendors);
    console.log(filteredProducts);
    const router = useRouter();
    const vendorName = router.query.vendors_details;
    const products = filteredProducts.filteredProducts;
    console.log(products);
    useEffect(() => {
        axios.get("/api/vendors").then((response) => {
            setVendors(response.data);
        });
    }, []);

    const filteredVendors = vendors.filter(
        (vendor) => vendor.name == vendorName
    );
    console.log(filteredVendors);

    return (
        <div>
            <style>
                {`
            .vendor-cover{
                height:300px;
                width:100%;
           background: url('https://i.ibb.co/g69VWkW/photo-1605447813584-26aeb3f8e6ae.jpg');
               background-position: center;
                background-repeat: no-repeat;
                background-size:cover;
            }
            .profile-pic{
                border:5px solid #f1f1f1;
                width:160px;
                height:160px;
            }
            `}
            </style>
            {filteredVendors.map((profile) => (
                <div key={profile._id}>
                    <div
                        id="profile-wrapper"
                        className="shadow pb-4 bg-gray-100"
                    >
                        <div className="relative">
                            <div className="vendor-cover"></div>
                            <div className="text-center shadow-lg profile-pic mx-auto rounded-full relative -mt-16">
                                <Image
                                    className="rounded-full"
                                    src={profile.banner}
                                    alt=""
                                    height={160}
                                    width={160}
                                />
                            </div>
                        </div>
                        <div
                            id="vendor-info"
                            className="mt-4 flex justify-center"
                        >
                            <div className="text-center pb-4">
                                <h1 className="text-xl mb-4">
                                    {profile.contact}
                                </h1>
                                <h1 className="md:text-3xl text-3xl my-4 font-bold">
                                    {profile.name} -{" "}
                                    <span className="text-xl font-semibold">
                                        {profile.subtitle}
                                    </span>
                                </h1>
                                <p>{profile.address}</p>
                                <div className="flex mt-4 gap-x-1.5 justify-center">
                                <a
                                        target="_blank"
                                        href="https://facebook.com/"
                                        rel="noopener noreferrer"
                                    >
                                        <FaFacebookSquare className="w-6 h-6 text-blue-500" />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://twitter.com/"
                                        rel="noopener noreferrer"
                                    >
                                        <FaTwitterSquare className="w-6 h-6 text-blue-400" />
                                    </a>
                                    
                                    <a
                                        target="_blank"
                                        href="https://linkedin.com/"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className="w-6 h-6 text-gray-500" />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://instagram.com/"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="w-6 h-6 text-red-500" />
                                    </a>
                                    </div>
                                    
                            
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-span-2 md:col-span-3 py-4">
                <h3 className="text-center text-3xl py-3 font-semibold">
                    Products
                </h3>
                <div className="p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 justify-center align-middle">
                    {products.length === 0 && (
                        <div className="w-full p-4 text-center">
                            <p className="text-xl">
                                This Vendors has no products
                            </p>
                        </div>
                    )}
                    {products.length !== 0 &&
                        products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default VendorsDetails;

export async function getServerSideProps(context) {
    const vendorName = context.query.vendors_details;
    const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`);
    const products = await res.json();

    const filteredProducts = products.filter(
        (product) => product.vendor_name == vendorName
    );

    return {
        props: { filteredProducts }
    };
}
