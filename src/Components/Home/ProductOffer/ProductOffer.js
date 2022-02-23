import React from "react";

const Styles = `{
    background-image: url('https://i.ibb.co/mRnBkRx/offer-1.jpg');
}`;
const ProductOffer = () => {
    return (
        <div className="py-10 mx-4 md:mx-8 overflow-hidden">
            <style jsx>{`
                .bgOffer {
                    background: url("https://i.ibb.co/6YGHkVT/offer-2.jpg");
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
            <style jsx>{`
                .bgOfferT {
                    background: url("https://i.ibb.co/mRnBkRx/offer-1.jpg");
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
            <h2 className="text-4xl text-black font-semibold text-center pb-3">
                Best Offer Products
            </h2>
            <p className="text-center text-xl pb-7">
                Trusted and powerful eCommerce store for all
            </p>
            <div className="md:flex  gap-10">
                <div className="bgOffer h-56 overflow-hidden md:w-1/2 rounded-lg shadow-md">
                    <div className="px-6 py-6">
                        <p className="text-xl font-bold text-green-500 uppercase">
                            Products
                        </p>
                        <a
                            href="#"
                            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline"
                        >
                            Fruit & Vegetables
                        </a>
                        <p className="text-lg text-gray-700 font-base w-60 leading-6 mt-4">
                            Lorem ipsum dolor sit amet, consectetur Natoque sem
                            et volutpat viverra.
                        </p>
                    </div>
                </div>
                <div className="bgOfferT mt-4 md:mt-0  h-56 overflow-hidden md:w-1/2 rounded-lg shadow-md">
                    <div className="px-6 py-6">
                        <p className="text-xl font-bold text-green-500 uppercase">
                            Products
                        </p>
                        <a
                            href="#"
                            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline"
                        >
                            Meat & Seafood
                        </a>
                        <p className="text-lg text-gray-700 leading-6 w-60 font-base mt-4">
                            Lorem ipsum dolor sit amet, consectetur Natoque sem
                            et volutpat viverra.
                        </p>
                    </div>
                </div>
                {/* <div className={Styles}>
                    <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md h-auto">
                        <Image
                            src="https://i.ibb.co/6YGHkVT/offer-2.jpg"
                            width={650}
                            height={300}
                            priority
                            alt="Best Offer Products"
                            className="object-cover w-full h-full rounded"
                        />
                        <div className="py-6">
                            <div>
                                <span className="text-xl font-bold text-green-500 uppercase">
                                    Products
                                </span>
                                <a
                                    href="#"
                                    className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
                                >
                                    Vegetable
                                </a>
                                <p className="mt-2 text-base text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Molestie parturient et sem
                                    ipsum volutpat vel. Natoque sem et aliquam
                                    mauris egestas quam volutpat viverra.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProductOffer;
