import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import Product from "../../src/Components/Products/Product/Product";
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryDetails = (filteredProducts) => {
const [vendors, setVendors] = useState([])
const [isLoading, setIsLoading] = useState()
  console.log(vendors)
  console.log(filteredProducts)
  const router = useRouter();
  const vendorName = router.query.vendor_details;
const products = filteredProducts.filteredProducts;


  useEffect (()=>{
    axios.get("/api/vendors")
    .then(response => {
      setVendors(response.data)
    })
  },[])


  const filteredVendors =vendors.filter((vendor) => vendor.name == vendorName);
  console.log(filteredVendors)
  // const profileData ={filteredVendors}
  // console.log(profileData)
  return (
    <div>
   <h1>hello {vendorName}</h1>
    
  {
    filteredVendors.map(profile=>{
      <li key={profile._id}>
        hello</li>
      // <div key={profile._id} id="vendor-info" className="mt-4 flex justify-center">
      //       <div className="text-center">
      //         <h1 className="text-xl mb-4">{profile.name}</h1>
      //         <h1 className="md:text-3xl text-2xl my-4 font-semibold">
      //           Daily Super Shoppp
      //         </h1>
      //         <p>Purbo Shewrapara, Dhaka, Dhaka, Dhaka, Bangladesh</p>
      //         <div className="flex mt-4 gap-x-1.5 justify-center">
      //           <a href="">
      //             {" "}
      //             <FaFacebookSquare className="w-6 h-6 text-blue-500" />{" "}
      //           </a>
      //           <a href="">
      //             {" "}
      //             <FaTwitterSquare className="w-6 h-6 text-blue-400" />{" "}
      //           </a>
      //           <a href="">
      //             {" "}
      //             <FaLinkedin className="w-6 h-6 text-gray-500" />{" "}
      //           </a>
      //           <a href="">
      //             {" "}
      //             <FaInstagram className="w-6 h-6 text-red-500" />{" "}
      //           </a>
      //         </div>
      //         <button className="border rounded-full mt-4  text-white px-4 py-1 bg-green-500 hover:bg-green-400">
      //           Contact
      //         </button>
      //       </div>
      //     </div>
    })
  }
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 mx-4 md:mx-0 lg:mx-0">
          {products.map((venProduct) => (
            <div key={venProduct._id}>
              <div className="w-full h-full bg-white rounded-lg border">
                <div className="relative">
                  <Image
                    width={250}
                    height={250}
                    layout="responsive"
                    src={venProduct.product_imageUrl}
                    alt=""
                  ></Image>
                  <span className="absolute top-0 left-0 z-10 px-2 py-1  bg-red-500 text-white rounded-l-none mt-2 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {venProduct.product_badge}
                  </span>
                </div>
                <div className="p-5">
                  <p>{venProduct.product_category}</p>
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {venProduct.product_title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Debitis, ex!
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center py-1 px-4 text-sm font-medium text-center text-white bg-green-500 rounded-full hover:bg-green-800 focus:ring-4 focus:ring-green-300"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
            
    </div>
  );
}

export default CategoryDetails;

export async function getServerSideProps(context) {
    const vendorName = context.query.vendor_details;
    
    const res = await fetch(`${process.env.MY_APP_DOMAIN}/api/products`)
    const products = await res.json();

  const filteredProducts = products.filter((product) => product.vendor_name == vendorName);
    
    return {
    props: {filteredProducts},

      
    }
  }

  
