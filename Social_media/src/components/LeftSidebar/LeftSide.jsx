import React ,{useRef ,useState,useEffect}from "react";
import nature from "../../assets/images/nature.jpg";
import job from "../../assets/images/job.png"
import location from "../../assets/images/location.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import laptop from "../../assets/images/laptop.jpg"
import { Tooltip, Avatar as MaterialAvatar } from "@material-tailwind/react";
import avatarImage from "../../assets/images/profile.jpg";

const LeftSide = () => {

    const [data,setData]=useState([]);
    const count=useRef(0);
    useEffect(()=>{
        const imageList=[
            {id:"",
            imageList:"laptop",
        },
    ];
        
    })
    return (
        <div className="flex flex-col h-screen w-fit bg-white pb-4 border-2 rounded-r-x1 shadow-lg">
           
            <div className="flex img w-full flex-col  items-center relative">
                <img  
                    className="h-28 w-full rounded-r-x1"
                    src={nature} 
                    alt="nature"
                />
                 <div className="absolute bottom-4 mt-4">
                <Tooltip content="Profile" placement="top">
                    <MaterialAvatar size="md" src={avatarImage} alt="avatar" /> 
                </Tooltip>
            </div>
            </div>
            <div className="flex flex-col items-center pt-6">
                <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
                    User email
                </p>
                <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none">Access exclusive tools& insignts</p>
                <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">Try premium for free </p>
            </div>
            <div className="flex flex-col p1-2 mt-4">
                <div className="flex items-center pb-4">
                <img className="h-10" src={location} alt="location"></img>
                <p className="font-roboto font-bold text-lg  no-underline tracking-normal leading-none mt-2 ">India</p>
                </div>
            </div>
            <div className="flex flex-col p1-2">
                <div className="flex items-center pb-4">
                <img className="h-10" src={job} alt="job"></img>
                <p className="font-roboto font-bold text-lg  no-underline tracking-normal leading-none">React Developer</p>
                </div>
                <div className="flex justify-center items-center pt-4">
                    <p className="font-Merriweather_Sans font-bold  text-md text-[#0177b7] no-underline tracking-normal leading-none">
                        Events
                    </p>
                    <p className="font-Merriweather_Sans font-bold  text-md text-[#0177b7] no-underline tracking-normal leading-none">
                        Groups
                    </p>
                    <p className="font-Merriweather_Sans font-bold  text-md text-[#0177b7] no-underline tracking-normal leading-none">
                        Follow
                    </p>
                    <p className="font-Merriweather_Sans font-bold  text-md text-[#0177b7] no-underline tracking-normal leading-none">
                        More
                    </p>


                </div>
            </div>
            <div className="ml-2 ">
                <p className="font-Merriweather_Sans font-bold text-lg no-underline tracking-normal leading-none py-2">
                    Social Profiles
                </p>
                <div className="flex items-center">
                    <img className="h-1 mb-3 mr-2" src={facebook} alt="facebook"></img>
                    <p className="font-serif font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2">
                        Social Network
                    </p>
                </div>
                <div className="flex items-center">
                    <img className="h-1 mb-3 mr-2" src={facebook} alt="facebook"></img>
                    <p className="font-serif font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-500 no-underline tracking-normal leading-none py-2">
                        Twitter
                    </p>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center pt-4 ">
                <p className="font-serif font-bold text-lg no-underline tracking-normal leading-none">
                    Random Ads
                </p>
                <div className="bg-blue-600 rounded-xl h-1 mb-4">

                </div>
                <img className={laptop} src="" alt="ads"/>
                <img className={laptop} src="" alt="ads"/>
                <img className={laptop} src="" alt="ads"/>
            </div>
        </div>

    );
};

export default LeftSide;
