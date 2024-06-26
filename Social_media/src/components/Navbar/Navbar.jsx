import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
            <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">
                    ConnectX
                </span>
            </div>
            <div className="flex justify-center items-center mx-auto">
                <NavLinks />
            </div>
            <UserLinks /> {/* Render UserLinks within the Navbar component */}
        </div>
    );
};

export default Navbar;
