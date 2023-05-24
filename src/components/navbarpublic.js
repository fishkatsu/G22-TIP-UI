import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const NavbarPublic = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="bg-gray-900">
            <div className="flex items-center justify-between h-24 px-16 mx-auto text-black">
                <h1 className="w-full text-5xl font-bold text-white">CorpU.</h1>
                {/* navbar menu */}
                <ul className="hidden md:flex">
                    <li className="p-4">
                        <Link
                            to={"/"}
                            className="m-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="p-4 whitespace-nowrap">
                        <Link
                            to={"/jobavailable-public"}
                            className="mr-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Job Available
                        </Link>
                    </li>
                    {/* <li className="p-4 whitespace-nowrap">
                        <Link
                            to={"/applyjob"}
                            className="mr-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Apply Job
                        </Link>
                    </li> */}
                    <li className="p-4">
                        <Link
                            to={"/login"}
                            className="text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Login
                        </Link>
                    </li>
                </ul>

                {/* side menu for small devices */}
                <div
                    onClick={handleNav}
                    className="block md:hidden"
                    style={{ zIndex: 1 }}
                >
                    {nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>
                <ul
                    className={
                        nav
                            ? "fixed top-0 right-0 w-[60%] h-full border-l border-r-gray-900 ease-in-out duration-500 bg-gray-600"
                            : "ease-in-out duration-500 fixed right-[-100%]"
                    }
                >
                    <h1 className="w-full text-3xl font-bold text-[#FFFFFF] m-4">
                        Menu.
                    </h1>

                    <li className="p-4 border-b border-gray-700 text-[#FFFFFF]">
                        <Link
                            to={"/"}
                            className="mr-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Home
                        </Link>
                    </li>

                    <li className="p-4 border-b border-gray-700 text-[#FFFFFF]">
                        <Link
                            to={"/jobavailable"}
                            className="mr-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Job Available
                        </Link>
                    </li>

                    <li className="p-4 border-b border-gray-700 text-[#FFFFFF]">
                        <Link
                            to={"/applyjob"}
                            className="mr-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Apply Job
                        </Link>
                    </li>

                    <li className="p-4 text-[#FFFFFF]">
                        <Link
                            to={"/login"}
                            className="mr-4 text-xl font-bold text-white uppercase text-navMenu"
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default NavbarPublic;
