import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import logo from '../../../../public/logo.png';

const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "#", current: false },
    { name: "Categories", href: "#", current: false },
    { name: "Blogs", href: "/blogs/blogs", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <>
            <style jsx>{`
                .megaMenu {
                    display: none;
                    left: 0;
                    position: absolute;
                    text-align: left;
                    width: 100%;
                }

                .hoverable {
                    position: static;
                }

                .hoverable:hover .megaMenu {
                    display: none;
                }
                .deals:hover .deals-text {
                    color: orange;
                }
            `}</style>
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile hamburger menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-Black">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                {/* Large Screen NavBar */}
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    {/* Logo */}
                                    <div className="flex-shrink-0 flex items-center">
                                        <Image
                                            width="180px"
                                            height="70px"
                                            className="block lg:hidden h-8 w-auto"
                                            src={logo}
                                            alt="FoodMart"
                                        />
                                    </div>
                                    <div className="hidden w-full sm:block sm:ml-6 items-center md:flex grow">
                                        {/* search bar */}
                                        <div className="w-full ml-5 relative mx-auto text-gray-600">
                                            <input
                                                className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                                type="search"
                                                name="search"
                                                placeholder="Search your food"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-0 top-0 mt-3 mr-4"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side menu buttons */}
                                <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* Compare button */}
                                    <div className="mx-2">
                                        <button type="button" className="text-gray-600 hover:text-black">
                                            <svg className="h-5 w-5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0)">
                                                    <path d="M20.298 8.38686L21.7149 7.56033C18.6493 2.2939 12.0415 0.282014 6.56113 2.94644V0.930145H4.9212V5.84994H9.84099V4.21001H7.74598C12.3848 2.24224 17.7631 4.03197 20.298 8.38686Z" fill="currentColor" />
                                                    <path d="M5.33116 21.1635C1.52924 18.0758 0.528575 12.686 2.96884 8.43938L1.54702 7.61942C-1.2363 12.4662 -0.183154 18.6069 4.05611 22.2492H2.0513V23.8892H6.97109V18.9694H5.33116V21.1635V21.1635Z" fill="currentColor" />
                                                    <path d="M22.5209 11.2355L19.0426 14.7146L20.202 15.874L21.5959 14.4801C21.0492 19.5603 16.7683 23.4158 11.6588 23.43V25.0699C17.7465 25.0539 22.7967 20.3557 23.2514 14.2849L24.8405 15.874L26 14.7146L22.5209 11.2355Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0">
                                                        <rect width="26" height="26" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </button>
                                        <Link href="/home/compare">
                                        <a className="text-sm font-semibold text-gray-600">Compare</a>
        </Link>
                                        
                                    </div>
                                    {/* Wishlist button */}
                                    <div className="mx-2">
                                        <button type="button" className="text-gray-600 hover:text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                        <span className="text-sm font-semibold text-gray-600">
                                            Wishlist
                                        </span>
                                    </div>
                                    {/* Cart button */}
                                    <div className="mx-2">
                                        <button type="button" className=" text-gray-600 hover:text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </button>
                                        <span className="text-sm font-semibold text-gray-600">Cart</span>
                                    </div>
                                    {/* Notification button */}
                                    <div className="mx-2 ">
                                        <button
                                            type="button"
                                            className="text-gray-600 hover:text-black"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                        <span className="text-sm font-semibold text-gray-600">Notification</span>
                                    </div>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="flex text-sm rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Sign In
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>

                            {/* Large Screen second bar */}
                            <div className="relative flex items-center h-10">
                                <div className="hidden sm:block sm:ml-6 justify-center  items-center md:flex grow">
                                    {/* Large Screen Navigation */}
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link key={item.name}
                                            href={item.href}>
                                             <a
                                                
                                                className={classNames(
                                                    item.current
                                                        ? "text-green-600"
                                                        : "text-black hover:bg-gray-100 hover:text-green-500",
                                                    "px-3 py-2 rounded-md text-md font-medium text-gray-500"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                          </Link>
                                           
                                        ))}
                                    </div>

                                    {/* <!--Hoverable Mega Menu--> */}
                                    <div className="hoverable">
                                        <a
                                            href="#"
                                            className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-semibold"
                                        >
                                            Menu
                                        </a>

                                        <div className="megaMenu px-5 bg-white mb-16 rounded-lg shadow-md">
                                            <div className="container w-full flex flex-wrap justify-between sm:mb-0 bg-white ">
                                                <div className="w-full text-green-500 mb-2">
                                                    <h2 className=" hidden font-semibold text-3xl">
                                                        FoodMart Mega Menu
                                                    </h2>
                                                </div>
                                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                                                    <div className="flex items-center">
                                                        <h3 className="text-xl text-green-500 hover:text-orange-400 font-semibold mb-2">
                                                            Fruit & Vegetables
                                                        </h3>
                                                    </div>
                                                    <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Meat & Poultry
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Fresh Vegetables
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Herbs &
                                                                Seasonings
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Cuts & Sprouts
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Exotic Fruits &
                                                                Veggies
                                                            </a>
                                                        </div>
                                                    </div>
                                                </ul>
                                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                                                    <div className="flex items-center">
                                                        <h3 className="text-xl text-green-500 hover:text-orange-400 font-semibold mb-2">
                                                            Breakfast & Dairy
                                                        </h3>
                                                    </div>
                                                    <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Milk & Flavoured
                                                                Milk
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Butter and
                                                                Margarine
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Eggs Substitutes
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Marmalades
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Sour Cream
                                                            </a>
                                                        </div>
                                                    </div>
                                                </ul>
                                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                                                    <div className="flex items-center">
                                                        <h3 className="text-xl text-green-500 hover:text-orange-400 font-semibold mb-2">
                                                            Meat & Seafood
                                                        </h3>
                                                    </div>
                                                    <div className="grid grid-rows-5 grid-flow-col gap-3 py-3 font-medium">
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Breakfast
                                                                Sausage
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Dinner Sausage
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Chicken
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Sliced Deli Meat
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="text-gray-500 hover:text-green-500"
                                                            >
                                                                Wild Caught
                                                                Fillets
                                                            </a>
                                                        </div>
                                                    </div>
                                                </ul>
                                                <ul className=" flex items-center px-4 sm:w-1/2 lg:w-auto pb-6 pt-6 lg:pt-3">
                                                    <div className="w-full relative">
                                                        <div className="deals z-10 absolute top-0 left-0 p-6 w-full">
                                                            <div className="flex items-center justify-between w-full">
                                                                <h2 className="deals-text text-2xl font-semibold text-green-500 ">
                                                                    Hot Deals
                                                                </h2>
                                                                <div className="text-lg text-white  w-20 h-20 mx-4 rounded-full flex items-center justify-center font-semibold bg-orange-500">
                                                                    70% <br />{" "}
                                                                    Off
                                                                </div>
                                                            </div>
                                                            <p className="w-32 text-2xl text-gray-600 font-semibold mb-5">
                                                                Dont miss
                                                                trending
                                                            </p>
                                                            <button className="deals-button bg-green-500 hover:bg-orange-500 text-white font-semibold text-xl rounded-lg px-4 py-2 ">
                                                                Shop Now
                                                            </button>
                                                        </div>
                                                        <Image
                                                            className="z-0"
                                                            src="https://i.ibb.co/sPmgYLZ/banner-menu.png"
                                                            alt="Picture of the author"
                                                            width="420px"
                                                            height="260px"
                                                        />
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small screen navigation */}
                        <Disclosure.Panel className="">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "hover:bg-gray-700 hover:text-white",
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
