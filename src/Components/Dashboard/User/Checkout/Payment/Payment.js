import Image from "next/image";
import React from "react";

const Payment = () => {
    return (
        <div>
            <form action="">
                <div className="  text-left ">
                    <div>
                        <div className="w-76 flex items-center justify-center px-5 pb-10 ">
                            <div className="w-full mx-auto py-5 text-gray-700">
                                <div className="mb-10">
                                    <h1 className="text-center font-bold text-xl uppercase">
                                        Secure payment info
                                    </h1>
                                </div>
                                <div className="mb-3 flex -mx-2">
                                    <div className="px-2">
                                        <label
                                            htmlFor="type1"
                                            className="flex items-center cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-green-500"
                                                name="type"
                                                id="type1"
                                                defaultChecked
                                            />
                                            <Image
                                                width="50"
                                                height="50"
                                                className=""
                                                src="https://i.ibb.co/WWzdxxr/Master-Card.png"
                                                alt=""
                                            />
                                            <Image
                                                width="60"
                                                height="20"
                                                className=""
                                                src="https://i.ibb.co/nkRRpk8/visa.png"
                                                alt=""
                                            />
                                        </label>
                                    </div>
                                    <div className="px-2">
                                        <label
                                            htmlFor="type2"
                                            className="flex items-center cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-green-500"
                                                name="type"
                                                id="type2"
                                            />
                                            <Image
                                                width="50"
                                                height="50"
                                                className=""
                                                src="https://i.ibb.co/WWzdxxr/Master-Card.png"
                                                alt=""
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="font-bold text-sm mb-2 ml-1">
                                        Name on card
                                    </label>
                                    <div>
                                        <input
                                            className="w-full px-3 py-2 mb-1 border-1 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors"
                                            placeholder="John Smith"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="font-bold text-sm mb-2 ml-1">
                                        Card number
                                    </label>
                                    <div>
                                        <input
                                            className="w-full px-3 py-2 mb-1 border-1 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors"
                                            placeholder="0000 0000 0000 0000"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 -mx-2 flex items-end">
                                    <div className="px-2 w-1/2">
                                        <label className="font-bold text-sm mb-2 ml-1">
                                            Expiration date
                                        </label>
                                        <div>
                                            <select className="form-select w-full px-3 py-2 mb-1 border-1 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer">
                                                <option value="01">
                                                    01 - January
                                                </option>
                                                <option value="02">
                                                    02 - February
                                                </option>
                                                <option value="03">
                                                    03 - March
                                                </option>
                                                <option value="04">
                                                    04 - April
                                                </option>
                                                <option value="05">
                                                    05 - May
                                                </option>
                                                <option value="06">
                                                    06 - June
                                                </option>
                                                <option value="07">
                                                    07 - July
                                                </option>
                                                <option value="08">
                                                    08 - August
                                                </option>
                                                <option value="09">
                                                    09 - September
                                                </option>
                                                <option value="10">
                                                    10 - October
                                                </option>
                                                <option value="11">
                                                    11 - November
                                                </option>
                                                <option value="12">
                                                    12 - December
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="px-2 w-1/2">
                                        <select className="form-select w-full px-3 py-2 mb-1 border-1 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors cursor-pointer">
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-10">
                                    <label className="font-bold text-sm mb-2 ml-1">
                                        Security code
                                    </label>
                                    <div>
                                        <input
                                            className="w-full px-3 py-2 mb-1 border-1 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition-colors"
                                            placeholder="000"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="py-5">
                                    <hr className="border-green-500 p-1" />
                                    <h1 className="text-center">Or </h1>
                                    <hr className="border-green-500 p-1" />
                                </div>
                                <div className="flex flex-row justify-center align-middle m-3">
                                    <div>
                                        <button className="m-3">
                                            {/* <Image src=""/> */}
                                            <Image
                                                src="https://i.ibb.co/dQpKg4z/Bkash.png"
                                                width="90"
                                                height="70"
                                                alt=""
                                            ></Image>
                                        </button>
                                    </div>
                                    <div>
                                        <button className=" p-1 m-3">
                                            <Image
                                                src="https://i.ibb.co/By9RtbT/nagad.png"
                                                width="90"
                                                height="50"
                                                alt=""
                                            ></Image>
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        <i className="mdi mdi-lock-outline mr-1"></i>{" "}
                                        PAY NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;
