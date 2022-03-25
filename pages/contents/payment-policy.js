import React from "react";
import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const PaymentPolicy = () => {
  return (
    <div>
      <div className="head-banner">
        <div className="container mx-auto">
          <div className="banner-inner flex flex-col justify-center items-center">
            <h1 className="banner-title font-bold text-4xl text-gray-900 mb-4">
              <span className="">Payment Policy</span>
            </h1>
            {/* nav */}
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Link href="/">Home</Link>
                  </a>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                    Payment Policy
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="lg:w-full md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 primary-bg-color pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  1
                </div>
                <div className="flex-grow pl-4 h-full w-full">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    Delivery charge varies with each product. Most of product
                    FREE delivery in India. Some items may have a shipping cost
                    depending on the product. .
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 primary-bg-color pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  2
                </div>
                <div className="flex-grow pl-4 h-full w-full">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    The estimated time of delivery is within 7 working days for
                    domestic orders and 15-20 working days for international
                    orders. All orders get shipped within 4 to 5 days from the
                    our warehouse.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  3
                </div>
                <div className="flex-grow pl-4 mx-auto">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    We try to process all deliveries through reputed courier
                    companies like Bluedart, Aramex, E-come, DTDC, DHL and
                    Fedex. In some cases, your pincode is not serviceable by
                    these courier companies, we use Indian Speed Post for those
                    deliveries. .
                  </p>
                </div>
              </div>
              <div className="w-full image">
                      <img
                          className="w-1/2 h-1/2 mx-auto md:table hidden"
                          src="https://i.ibb.co/pdXPZMC/Online-payment-Monochromatic-1.png"
                          alt="Picture of the author"
                        />
              </div>
            </div>
             {/* right */}
             <div id="right-part">
             <div className="w-full image">
                      <img
                          className="w-1/2 h-1/2 mx-auto"
                          src="https://i.ibb.co/6PzQhry/Card-Payment-Monochromatic-1.png"
                          alt="Picture of the author"
                        />
              </div>
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 primary-bg-color pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  4
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    Basket offers you multiple payment methods. Whatever your
                    online mode of payment, you can trust assured that Basket
                    trusted payment gateway partners use secure encryption
                    technology to keep your transaction details confidential at
                    all times. .
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 primary-bg-color pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  5
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 5
                  </h2>
                  <p className="leading-relaxed">
                    Basket does not collect or store your account information at
                    all. Your transaction is authorized at multiple points,
                    first by EBS/CCavenue and subsequently by
                    Visa/MasterCard/Amex secure directly without any information
                    passing through us. .
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 inline-flex items-center justify-center text-white relative z-10">
                  6
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    You may use Internet Banking, Debit Card, Credit Card and
                    Cash on Delivery to make your purchase. We also accept
                    payments made using Visa, MasterCard, American Express and
                    Any Club credit/debit cards. .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
/* https://i.ibb.co/FXc0DHF/pngtree-cartoon-mobile-phone-secure-payment-information-illustration-png-image-1722527-1.jpg
https://i.ibb.co/GTQQswS/data-protection-2642070-2203261-1.png
https://i.ibb.co/QN7q82S/pngtree-mobile-phone-pos-machine-mobile-online-payment-png-image-1718053-1.jpg */
export default PaymentPolicy;
