import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, HeartIcon, MenuIcon, RefreshIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import logo from '../../../../public/logo.png';

const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products/all-products", current: false },
    { name: "Blogs", href: "/blogs", current: false },
    { name: "Vendors", href: "/vendors", current: false },
    { name: "About Us", href: "/contents/about-us", current: false },
    { name: "Contact Us", href: "/contents/contact-us", current: false },
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
                    display: block;
                }

                .hoverable:hover .megaMenu {
                    display: block;
                }
                .deals:hover .deals-text {
                    color: orange;
                }
                .right-nav:hover .nav-icon-btn{
                    color: black;
                }
            `}</style>
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
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
                                    <div className="mx-2 text-gray-600 right-nav">
                                        <button type="button" className="nav-icon-btn">
                                        <RefreshIcon className="w-6 h-6"/>
                                        </button>
                                        <Link href="/compare">
                                            <a className="text-sm font-semibold">Compare</a>
                                        </Link>
                                        
                                    </div>
                                    {/* Wishlist button */}
                                    <div className="mx-2 text-gray-600 right-nav">
                                        <button type="button" className="nav-icon-btn">
                                            <HeartIcon className="h-6 w-6"/>
                                        </button>
                                        <Link href="/dashboard/user/wish-list">
                                            <a className="text-sm font-semibold text-gray-600">
                                                Wishlist
                                            </a>
                                        </Link>
                                        
                                    </div>
                                    {/* Cart button */}
                                    <div className="mx-2  text-gray-600 right-nav">
                                        <button type="button" className="nav-icon-btn">
                                            <ShoppingCartIcon className="h-6 w-6"/>
                                        </button>
                                        <Link href="/checkout">
                                            <a className="text-sm font-semibold text-gray-600">
                                                Cart
                                            </a>
                                        </Link>
                                    </div>
                                    {/* Notification button */}
                                    <div className="mx-2  text-gray-600 right-nav">
                                        <button type="button" className="nav-icon-btn">
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                        <span className="text-sm font-semibold text-gray-600">Notification</span>
                                    </div>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative z-50">
                                        <div>
                                            <Menu.Button className="flex text-sm rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <UserIcon className="h-6 w-6"/>
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
                                                        <Link href="/dashboard/dashboard">
                                                        <a
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Dashboard
                                                        </a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href="/login">
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Login
                                                        </a>
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href="#">
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Logout
                                                            </a>
                                                            </Link>
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
                                                <a className={classNames(
                                                        item.current
                                                            ? "text-green-600"
                                                            : "text-black hover:bg-gray-100 hover:text-green-500",
                                                        "px-3 py-2 rounded-md text-md font-medium text-gray-500"
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }>
                                                    {item.name}
                                                </a>
                                            </Link>
                                           
                                        ))}
                                    </div>

                                    {/* <!--Hoverable Mega Menu--> */}
                                    <div className="hoverable hoverable-menu">
                                        <a
                                            href="#"
                                            className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-semibold"
                                        >
                                            <div className='flex flex-row items-center'>Menu <FiChevronDown className='pt-1 w-5 h-5' /></div>
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
                            <div className="px-2 pt-1 pb-3 space-y-1 text-center">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-orange-500 text-white"
                                                : "hover:bg-orange-500 hover:text-white",
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
