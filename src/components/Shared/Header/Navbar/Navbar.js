import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-600">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link
                                className="text-2xl font-bold text-white lg:text-3xl"
                                to="/"
                            >
                                eSwap
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">
                                <Link
                                    to="/"
                                    className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700"
                                >
                                    HOME
                                </Link>

                                <Link
                                    to="/orders"
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    ORDERS
                                </Link>

                                <Link
                                    to="/products"
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    PRODUCTS
                                </Link>

                                <div class="dropdown inline-block relative">
                                    <Link
                                        to="/products"
                                        className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                    >
                                        PRODUCTS 
                                    </Link>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
               
                                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-5">
                                        <li class=""><Link class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</Link></li>
                                        <li class=""><Link class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</Link></li>
                                        <li class=""><Link class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</Link></li>
                                    </ul>
                                </div>

                                <Link
                                    to="/discount"
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    DISCOUNT
                                </Link>

                                <Link
                                    to="/review"
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    REVIEW
                                </Link>
                                <Link
                                    to="/contact"
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    CONTACT
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                                >
                                    LOGIN
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mr-2 md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-600 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {/*Mobile Menu Start*/}
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
                            >
                                HOME
                            </Link>
                            <Link
                                to="/orders"
                                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
                            >
                                ORDERS
                            </Link>
                            <Link
                                to="/products"
                                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
                            >
                                PRODUCTS
                            </Link>

                            <Link
                                to="/discount"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                DISCOUNT
                            </Link>

                            <Link
                                to="/review"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                REVIEW
                            </Link>

                            <Link
                                to="/contact"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                CONTACT
                            </Link>

                            <Link
                                to="/signup"
                                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                LOGIN
                            </Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
};

export default Navbar;
