import React from "react";
import Image from "next/image";
import Link from "next/link";
const NavSearchProduct = ({ products, setSearchItem }) => {

    return (
        <div key={products._id} className="w-full my-0 py-0 pl-6 hover:bg-green-100">
            <table >
                <tbody >
                    <tr className="py-0 my-0">
                        <td className="py-0 my-1">
                            <div className="my-0">
                                <Image
                                    src={products.product_imageUrl}
                                    alt="product image"
                                    className="object-cover"
                                    width="60px"
                                    height="30px"
                                />
                            </div>
                        </td>
                        <td className="py-0 my-0">
                            <div className="px-4 w-96">
                                <Link href={`/products/${products._id}`}>
                                    <a onClick={() => setSearchItem("")} className="text-sm font-semibold text-gray-500">
                                        {products?.product_title?.slice(0, 50)}
                                    </a>
                                </Link>
                            </div>
                        </td>
                        <td className="py-0 my-0">
                            <dev className="px-2">
                                <p className="text-sm font-semibold text-gray-500">
                                    {" "}
                                    ${products.product_price}
                                </p>
                            </dev>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default NavSearchProduct;
