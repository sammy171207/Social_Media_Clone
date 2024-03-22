import React from "react";
import nature from "../../assets/images/nature.jpg";
import { Tooltip, Avatar as MaterialAvatar } from "@material-tailwind/react"; // Rename Avatar import
import avatarImage from "../../assets/images/profile.jpg"; // Rename the imported image

const LeftSide = () => {
    return (
        <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-x1 shadow-lg">
            <div className="flex flex-col items-center relative">
                <img  
                    className="h-28 w-full rounded-r-x1"
                    src={nature} 
                    alt="nature"
                />
            </div>
            <div className="absolute bottom-4">
                <Tooltip content="Profile" placement="top">
                    <MaterialAvatar size="md" src={avatarImage} alt="avatar" /> {/* Use MaterialAvatar */}
                </Tooltip>
            </div>
        </div>
    );
};

export default LeftSide;
