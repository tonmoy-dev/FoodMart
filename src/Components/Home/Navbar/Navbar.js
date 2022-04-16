import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    HeartIcon,
    MenuIcon,
    RefreshIcon,
    ShoppingCartIcon,
    XIcon
} from "@heroicons/react/outline";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../../public/Logo-7.png";
import helplinePic from "../../../assets/images/navbar/helpline.png";
import useFirebase from "../../../Authenticaion/hooks/useFirebase";
import { fetchCartProducts, fetchCompareProducts, fetchWishlistProducts, setloading } from "../../../redux/slices/productSlice";
import Cart from "../../Cart/Cart";
import NavSearchProduct from "../../navSearchproduct/NavSearchProduct";
// import Cart from "../../Cart/Cart";
import AllCatagories from "./AllCatagories/AllCatagories";
import DropdownNavMenu from "./DropdownNavMenu/DropdownNavMenu";
import TopBar from "./TopBar/TopBar";

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

const Navigation = ()=> {
    const [searchItem, setSearchItem] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState();
    const user = useSelector((state) => state.states.user);
    const router = useRouter();
    const { logOut } = useFirebase();

    // redux fetch
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlists.wishlists);
    const compareList = useSelector((state) => state.compareList.compareList);
    const cart = useSelector((state) => state.cartItems.cart);

    useEffect(() => {
        dispatch(fetchWishlistProducts(user));
        dispatch(fetchCompareProducts(user));
        dispatch(fetchCartProducts(user));
        dispatch(setloading(false));
    }, [dispatch, loading]);

    useEffect(() => {
        setLoading(true);
        axios.get("/api/products").then((response) => {
            setProducts(response.data);
            setLoading(false);

        });
    }, []);

    if (!router?.pathname?.includes("dashboard"))
    return (
        <>
            <style jsx>{`
                .right-nav:hover .nav-icon-btn {
                    color: black;
                }
            `}</style>
            <TopBar />
            <Disclosure as="nav" className="relative pt-1 bg-white">
                {({ open }) => (
                    <>
                        {/* Horizontal Navigation Bar */}
                        <div className="relative px-2 mx-auto max-w-8xl sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-20 border-b border-gray-200">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile hamburger menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-Black">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block w-6 h-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>

                                {/* Large Screen NavBar */}
                                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                                    {/* Logo */}
                                    <div className="flex items-center flex-shrink-0 ml-10 md:ml-0">
                                        <Image
                                            width="190px"
                                            height="60px"
                                            className="block w-auto h-8 lg:hidden"
                                            src={logo}
                                            alt="FoodMart"
                                        />
                                    </div>
                                    {/* search bar */}
                                    <div className="hidden w-full z-50 sm:block pt-3.5 sm:ml-6 justify-center md:flex2 sm:pr-6 grow">
                                        <div className="relative">
                                            <div className="relative z-50 w-full mx-auto ml-5 text-gray-600">
                                                <input
                                                    className="w-full px-5 pr-12 text-sm bg-white border-2 border-gray-100 rounded-md h-9 "
                                                    type="search"
                                                    name="search"
                                                    onChange={(event) => {
                                                        setSearchItem(
                                                            event.target.value
                                                        );
                                                    }}
                                                    placeholder="Search your food"
                                                    autoComplete="off"
                                                />
                                                <button
                                                    type="submit"
                                                    className="absolute top-0 right-0 p-3 text-white rounded-r primary-bg-color"
                                                >
                                                    <FaSearch className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <div className="absolute z-50 w-full mx-auto ml-5 overflow-y-visible text-gray-600 bg-white rounded-md shadow">
                                                {products
                                                    .filter((product) => {
                                                        if (searchItem == "") {
                                                            return null;
                                                        } else if (
                                                            product.product_title
                                                                .toLowerCase()
                                                                .includes(
                                                                    searchItem.toLocaleLowerCase()
                                                                )
                                                        ) {
                                                            return product;
                                                        }
                                                    })
                                                    .slice(0,5).map((products) => (
                                                        <NavSearchProduct
                                                            key={
                                                                products.product_id
                                                            }
                                                            products={products}
                                                            setSearchItem={setSearchItem}
                                                        ></NavSearchProduct>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side menu buttons */}
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-x-4">
                                    {/* Compare button */}
                                    <div className="hidden text-gray-600 right-nav md:block">
                                        <button
                                            type="button"
                                            className="relative cursor-default nav-icon-btn"
                                        >
                                            <RefreshIcon className="w-7" />
                                            <span className="text-white font-base text-xs  primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4 pt-0.5 ">
                                                {!loading && compareList?.length}
                                                {loading && '0'}
                                            </span>
                                        </button>
                                        <Link href="/compare-list">
                                            <a className="text-sm font-medium">
                                                Compare
                                            </a>
                                        </Link>
                                    </div>
                                    {/* Wishlist button */}
                                    <div className="hidden text-gray-600 right-nav md:block">
                                        <button
                                            type="button"
                                            className="relative cursor-default nav-icon-btn"
                                        >
                                            <HeartIcon className="w-7" />
                                            <span className="text-white font-base text-xs primary-bg-color w-5 h-5 rounded-full absolute -top-1 pt-0.5 left-4">
                                                {!loading && wishlist?.length}
                                                {loading && '0'}
                                            </span>
                                        </button>
                                        <Link href="/wish-list">
                                            <a className="text-sm font-semibold text-gray-600">
                                                Wishlist
                                            </a>
                                        </Link>
                                    </div>
                                    {/* Cart button */}
                                    <div className="hidden text-gray-600 right-nav md:block">
                                        <button
                                            type="button"
                                            className="relative cursor-default nav-icon-btn"
                                        >
                                            <ShoppingCartIcon className="w-7" />
                                            <span className="text-white font-base text-xs primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4 pt-0.5 ">
                                                {!loading && cart?.length}
                                                {loading && '0'}
                                            </span>
                                        </button>
                                        <div className="relative inline text-sm font-semibold text-gray-600 cursor-pointer cart-modal-button">
                                            {/* <Link href="/cart"> */}
                                                <a className="text-sm font-semibold text-gray-600">
                                                    Cart
                                                </a>
                                            {/* </Link> */}
                                            <div className="absolute z-50 hidden bg-white border-2 rounded-md shadow-sm cart-modal top-5 -right-2 w-96">
                                                    <Cart></Cart>
                                                </div>
                                        </div>
                                    </div>
                                    {/* Cart button small screen*/}
                                    <div className="mr-10 text-gray-600 right-nav md:mr-0 md:hidden">
                                        <button
                                            type="button"
                                            className="relative cursor-default nav-icon-btn"
                                        >
                                            <Link className="hidden w-7" href="/cart"><a><ShoppingCartIcon className="w-7" /></a></Link>
                                            <span className="text-white font-base text-xs primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4 pt-0.5 ">
                                            {!loading && cart?.length}
                                            {loading && '0'}
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                {/* Profile dropdown */}
                                <Menu
                                    as="div"
                                    className="relative z-50 ml-0 md:ml-3"
                                >
                                    <div className="flex items-center p-1 text-sm border rounded-md gap-x-1">
                                        <Menu.Button className="">
                                            <FaRegUser className="p-1 bg-gray-200 rounded-md h-7 w-7 hover:bg-gray-300" />
                                        </Menu.Button>
                                        <div className="hidden font-medium md:flex gap-x-1">
                                            <Link href="/register">
                                                <a className="text-gray-600">
                                                    Register
                                                </a>
                                            </Link>
                                            |
                                            <Link href="/login">
                                                <a className="text-gray-600">
                                                    Login
                                                </a>
                                            </Link>
                                        </div>
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
                                        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {user?.email ? (
                                                    <p className="block px-4 py-2 text-sm text-gray-700">
                                                        Hi! {user.displayName}
                                                    </p>
                                                ) : (
                                                    <p className="block px-4 py-2 text-sm text-gray-700">
                                                        Welcome to FoodMart!
                                                    </p>
                                                )}
                                            </Menu.Item>
                                            {user?.email && (
                                                <>
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
                                                            <button
                                                                onClick={logOut}
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-gray-700"
                                                                )}
                                                            >
                                                                Logout
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </>
                                            )}
                                            {!user?.email && (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link href="/login">
                                                            <a
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
                                            )}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>

                        {/* Small screen navigation / Hamburger Navigation Menu */}
                        <Disclosure.Panel className="absolute left-0 z-40 w-full top-16">
                            <div className="px-3 py-4 mx-2 space-y-1 text-center bg-white rounded-md shadow-lg">
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
            {/* Large Screen second bar */}
            <div className="sticky top-0 z-30 hidden px-2 py-2 mx-auto transition-all bg-white shadow-sm md:block max-w-8xl sm:px-6 lg:px-8">
                <div className="relative flex items-center h-10">
                    {/* catagoies button */}
                    <AllCatagories></AllCatagories>
                    <div className="items-center justify-center hidden sm:block sm:ml-6 md:flex grow">
                        {/* Large Screen Navigation */}
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <a
                                        className={classNames(
                                            item.current
                                                ? "text-green-600"
                                                : "text-black hover:bg-gray-100 hover:text-green-500",
                                            "px-3 py-2 rounded-md text-md font-medium text-gray-500"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>

                        {/* Dropdown Navigation Mega Menu*/}
                        <DropdownNavMenu></DropdownNavMenu>
                    </div>
                    {/* Helpline */}
                    <div className="flex items-center text-sm font-medium text-gray-500 gap-x-3">
                        <Image
                            src={helplinePic}
                            alt="Picture of the author"
                            width="30"
                            height="30"
                        />
                        <div>
                            Hotline: <br />
                            <a href="tel:+88029849456">+88 02-9849456</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return null;
}

export default Navigation;