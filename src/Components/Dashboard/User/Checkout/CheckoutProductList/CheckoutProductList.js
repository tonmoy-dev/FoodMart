import Image from "next/image";
import React from "react";

const CheckoutProductList = ({ products }) => {
    const TotalProducts = products.slice(0, 3);
    // const { _id, product_badge, product_title, product_imageUrl, vendor_name, product_price } = products[0];

    // const total_price = TotalProducts.map(product => ( return  ))


    let sum = 0;
    for (let i = 0; i < TotalProducts.length; i++) {
        sum = parseFloat(TotalProducts[0].product_price) + sum;
    }

    return (
        <div>
            <div>
                <div>
                    <div></div>
                    <div className="w-full min-h-screen pb-5 pt-16">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5">
                            <h1 className="my-2 font-bold text-center text-xl text-gray-700 uppercase ">
                                Product List
                            </h1>
                            <div className=" text-gray-700" action="">
                                <div className=" my-6 flex flex-col text-left ">
                                    {TotalProducts.map((product) => {
                                        const {
                                            _id,
                                            product_badge,
                                            product_title,
                                            product_imageUrl,
                                            vendor_name,
                                            product_price,
                                        } = product;

                                        return (
                                            <div key={_id}>
                                                <div
                                                    key={_id}
                                                    className="my-2 flex flex-row"
                                                >
                                                    <div className="w-1/3">
                                                        <Image
                                                            src={
                                                                product_imageUrl
                                                            }
                                                            width="90"
                                                            height="80"
                                                            alt="product-image"
                                                        />
                                                    </div>
                                                    <div className="px-2 w-2/3">
                                                        <p>{product_title}</p>
                                                        <p>
                                                            by{" "}
                                                            <span className="text-green-600 font-bold">
                                                                {vendor_name}
                                                            </span>
                                                        </p>
                                                        <p>
                                                            price:{" "}
                                                            <span className="text-orange-600 font-bold">
                                                                ${product_price}
                                                            </span>{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div>
                                    <div>
                                        <h1 className="font-bold text-lg">
                                            Total:{" "}
                                            <span className="text-orange-500">
                                                {sum}
                                            </span>{" "}
                                            tk
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutProductList;
