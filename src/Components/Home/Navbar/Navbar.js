import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  HeartIcon,
  MenuIcon,
  RefreshIcon,
  ShoppingCartIcon,
  XIcon
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../../../../public/logo2.png";
import helplinePic from "../../../assets/images/navbar/helpline.png";
import useFirebase from "../../../Authenticaion/hooks/useFirebase";
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

export default function Navigation() {
  const user = useSelector((state) => state.states.user);
  const router = useRouter();
  const { logOut } = useFirebase();

  if (!router?.pathname?.includes("dashboard"))
    return (
      <>
        <style jsx>{`
          .right-nav:hover .nav-icon-btn {
            color: black;
          }
        `}</style>
        <TopBar />
        <Disclosure as="nav" className="bg-white relative pt-1">
          {({ open }) => (
            <>
              {/* Horizontal Navigation Bar */}
              <div className="relative max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20 border-b border-gray-200">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile hamburger menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-Black">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
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
                    <div className="flex-shrink-0 ml-10 md:ml-0 flex items-center">
                      <Image
                        width="190px"
                        height="60px"
                        className="block lg:hidden h-8 w-auto"
                        src={logo}
                        alt="FoodMart"
                      />
                    </div>
                    {/* search bar */}
                    <div className="hidden w-full sm:block sm:ml-6 items-center md:flex grow">
                      <div className="w-full ml-5 relative mx-auto text-gray-600">
                        <input
                          className="border-2 border-gray-100 bg-white h-9 w-full px-5 pr-12 rounded-lg text-sm "
                          type="search"
                          name="search"
                          placeholder="Search your food"
                        />
                        <button
                          type="submit"
                          className="absolute right-0 top-0 primary-bg-color p-3 rounded-r text-white"
                        >
                          <FaSearch className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right side menu buttons */}
                  <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-x-4">
                    {/* Compare button */}
                    <div className="text-gray-600 right-navr">
                      <button type="button" className="nav-icon-btn relative">
                        <RefreshIcon className="w-7" />
                        <span className="text-white font-base text-sm primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4">
                          1
                        </span>
                      </button>
                      <Link href="/compare">
                        <a className="text-sm font-medium">Compare</a>
                      </Link>
                    </div>
                    {/* Wishlist button */}
                    <div className="text-gray-600 right-nav">
                      <button type="button" className="nav-icon-btn relative">
                        <HeartIcon className="w-7" />
                        <span className="text-white font-base text-sm primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4">
                          1
                        </span>
                      </button>
                      <Link href="/dashboard/user/wish-list">
                        <a className="text-sm font-semibold text-gray-600">
                          Wishlist
                        </a>
                      </Link>
                    </div>
                    {/* Cart button */}
                    <div className="text-gray-600 right-nav">
                      <button type="button" className="nav-icon-btn relative">
                        <ShoppingCartIcon className="w-7" />
                        <span className="text-white font-base text-sm primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4">
                          1
                        </span>
                      </button>
                      <div className="cart-modal-button relative text-sm inline font-semibold text-gray-600">
                        <Link href="/cart">
                          <a className="text-sm font-semibold text-gray-600">
                            Cart
                          </a>
                        </Link>
                        {/* <div className="cart-modal rounded-md absolute top-5 right-0 z-50 border-2 shadow-md bg-white w-96 hidden">
                          <Cart></Cart>
                        </div> */}
                      </div>
                    </div>
                    {/* Notification button */}
                    {/* <div className="text-gray-600 right-nav">
                      <button type="button" className="nav-icon-btn relative">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="w-7" aria-hidden="true" />
                        <span className="text-white font-base text-sm primary-bg-color w-5 h-5 rounded-full absolute -top-1 left-4">
                          1
                        </span>
                      </button>
                    </div> */}
                  </div>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative z-50 ml-0 md:ml-3">
                    <div className="flex items-center text-sm gap-x-1 rounded-lg border p-1">
                      <Menu.Button className="">
                        <FaRegUser className="h-7 w-7 bg-gray-300 p-1 rounded-md" />
                      </Menu.Button>
                      <div className="md:flex gap-x-1 font-medium hidden">
                        <Link href="/register">
                          <a className="text-gray-600">Register</a>
                        </Link>
                        |
                        <Link href="/login">
                          <a className="text-gray-600">Login</a>
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                        {
                          user?.email && (
                            <>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/dashboard/dashboard">
                                    <a
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
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
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Logout
                                  </button>
                                )}
                              </Menu.Item>
                            </>
                          )
                        }
                        {
                          !user?.email && (
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/login">
                                  <a
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Login
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          )
                        }
                        
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>

              {/* Small screen navigation / Hamburger Navigation Menu */}
              <Disclosure.Panel className="absolute top-16 left-0 z-40 w-full">
                <div className="px-3 py-4 space-y-1 text-center shadow-lg mx-2 rounded-md bg-white">
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
                      aria-current={item.current ? "page" : undefined}
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
        <div className="sticky top-0 z-40 bg-white py-2 hidden md:block max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 shadow-sm transition-all">
          <div className="relative flex items-center h-10">
            {/* catagoies button */}
            <AllCatagories></AllCatagories>
            <div className="hidden sm:block sm:ml-6 justify-center items-center md:flex grow">
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
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>

              {/* Dropdown Navigation Menu*/}
              <DropdownNavMenu></DropdownNavMenu>
            </div>
            <div className="flex items-center gap-x-3 text-sm text-gray-500 font-medium">
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
