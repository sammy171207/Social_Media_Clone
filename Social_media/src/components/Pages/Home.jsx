import React from "react";
import NavBar from "../Navbar/Navbar";
import LeftSide from "../LeftSidebar/LeftSide";
import RightSide from "../RightSidebar/RightSide";

const Home = () => {
    return (
        <>
        <div className="w-full">
            <div className="fixed top-0 z-10 w-full bg-white">
                <NavBar />
            </div>
            <div className="flex bg-gray-100"> 
                <div className="flex-auto w-[20%] fixed top-12">
                <LeftSide />
                </div>
                
                <div className="flex-auto w-[20%] fixed right-0 top-12">
                <RightSide/>
                </div>
            </div>
        </div>


    


        </>
        
    );
};

export default Home;
