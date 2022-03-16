import React from "react";
import Image from "next/image";

const PaymentPolicy = () => {
    return (
        <div className="mt-6">
            <h1 className="text-center text-black text-4xl font-bold">
                Privacy Policy
            </h1>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="md:flex w-full justify-center">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
                                    1
                                </div>
                                <div className="flex-grow pl-4 h-full w-full">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 1
                                    </h2>
                                    <p className="leading-relaxed">
                                        Delivery charge varies with each
                                        product. Most of product FREE delivery
                                        in India. Some items may have a shipping
                                        cost depending on the product. .
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
                                    2
                                </div>
                                <div className="flex-grow pl-4 h-full w-full">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 2
                                    </h2>
                                    <p className="leading-relaxed">
                                        The estimated time of delivery is within
                                        7 working days for domestic orders and
                                        15-20 working days for international
                                        orders. All orders get shipped within 4
                                        to 5 days from the our warehouse.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
                                    3
                                </div>
                                <div className="flex-grow pl-4 mx-auto">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 3
                                    </h2>
                                    <p className="leading-relaxed">
                                        We try to process all deliveries through
                                        reputed courier companies like Bluedart,
                                        Aramex, E-come, DTDC, DHL and Fedex. In
                                        some cases, your pincode is not
                                        serviceable by these courier companies,
                                        we use Indian Speed Post for those
                                        deliveries. .
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
                                    4
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 4
                                    </h2>
                                    <p className="leading-relaxed">
                                        Basket offers you multiple payment
                                        methods. Whatever your online mode of
                                        payment, you can trust assured that
                                        Basket trusted payment gateway partners
                                        use secure encryption technology to keep
                                        your transaction details confidential at
                                        all times. .
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
                                    5
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        STEP 5
                                    </h2>
                                    <p className="leading-relaxed">
                                        Basket does not collect or store your
                                        account information at all. Your
                                        transaction is authorized at multiple
                                        points, first by EBS/CCavenue and
                                        subsequently by Visa/MasterCard/Amex
                                        secure directly without any information
                                        passing through us. .
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
                                    6
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                                        FINISH
                                    </h2>
                                    <p className="leading-relaxed">
                                        You may use Internet Banking, Debit
                                        Card, Credit Card and Cash on Delivery
                                        to make your purchase. We also accept
                                        payments made using Visa, MasterCard,
                                        American Express and Any Club
                                        credit/debit cards. .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 pt-6">
                        <Image
                            className="object-cover"
                            src="https://i.ibb.co/Dp9j0sy/privacy-policy.jpg"
                            alt="Picture of the author"
                            width={700}
                            height={1200}
                            priority
                        />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentPolicy;
