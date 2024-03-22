import React from "react";
import NavBar from "../Navbar/Navbar";
import LeftSide from "../LeftSidebar/LeftSide";

const Home = () => {
    return (
        <div className="w-full">
            <div className="fixed top-0 z-10 w-full bg-white">
                <NavBar />
            </div>
            <div className="flex bg-gray-100"> {/* Correct the class name here */}
                <div className="flex-auto w-[20%] fixed top-12">
                    <LeftSide />
                </div>
            </div>
        </div>
    );
};

export default Home;