import React from "react";

const Styles = `{
    background-image: url('https://i.ibb.co/mRnBkRx/offer-1.jpg');
}`;
const ProductOffer = () => {
    return (
        <div className="py-16 mx-5 md:mx-14 overflow-hidden">
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
                <div className="bgOffer flex justify-center items-center h-56 overflow-hidden md:w-1/2 rounded-lg shadow-md">
                    <div className="p-2 md:px-6 md:py-6 w-2/3 overflow-hidden">
                        <p className="text-xl font-bold text-green-500 uppercase">
                            Products
                        </p>
                        <a
                            href="#"
                            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline"
                        >
                            Fruit & Vegetables
                        </a>
                        <p className="text-lg text-gray-700 font-base leading-6 mt-4">
                            Fruits and vegetables are low in fat, salt and
                            sugar. They are a good source of dietary fibre.
                        </p>
                    </div>
                    <div className="bg-orange-600 hover:bg-green-600 inline-block w-24 h-24 md:w-36 md:h-36 border-4 border-slate-400 rounded-full text-center mt-8">
                        <p className="md:pt-3">
                            <span className="text-sm md:text-lg text-white">
                                Get
                            </span>
                            <br />
                            <span className="text-3xl md:text-5xl font-semibold text-gray-200">
                                25%
                            </span>
                            <br />
                            <span className="md:text-2xl font-semibold text-white">
                                OFF
                            </span>
                        </p>
                    </div>
                </div>
                <div className="bgOfferT flex justify-center items-center mt-4 md:mt-0  h-56 overflow-hidden md:w-1/2 rounded-lg shadow-md">
                    <div className="p-2 md:px-6 md:py-6 w-2/3 overflow-hidden">
                        <p className="text-xl font-bold text-green-500 uppercase">
                            Products
                        </p>
                        <a
                            href="#"
                            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline"
                        >
                            Meat & Seafood
                        </a>
                        <p className="text-lg text-gray-700 leading-6 font-base mt-4">
                            Shop Meat & Seafood - Compare prices, read reviews,
                            buy online, add to your shopping list.
                        </p>
                    </div>
                    <div className="bg-orange-600 hover:bg-green-600 inline-block w-24 h-24 md:w-36 md:h-36 border-4 border-slate-400 rounded-full text-center mt-8">
                        <p className="md:pt-3">
                            <span className="text-sm md:text-lg text-white">
                                Get
                            </span>
                            <br />
                            <span className="text-3xl md:text-5xl font-semibold text-gray-200">
                                20%
                            </span>
                            <br />
                            <span className="md:text-2xl font-semibold text-white">
                                OFF
                            </span>
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
