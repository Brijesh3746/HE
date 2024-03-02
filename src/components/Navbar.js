import React from 'react';
import logo from "./logo.png"
import { NavLink } from 'react-router-dom';
import {useState} from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    function clickHandler(){
            setIsOpen(!isOpen);
    }
    // new

    const shareUrl = window.location.href;

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    url: shareUrl,
                });
            } else {
                console.log("Shared URL:", shareUrl);
            }
        } catch (error) {
            console.error("Error sharing:", error);
        }
    };
    const screenWidth = window.innerWidth;
    console.log(screenWidth); // This will log the width of the screen in pixels


    // new
    return (
            <nav className="bg-gray-800 w-screen h-[75px] p-4 scroll">
                <div className="flex items-center h-full justify-between">

                    {/*logo*/}
                <div className="flex items-center h-full ">
                    <NavLink to="/" className="text-white text-lg font-semibold" activeClassName="text-gray-300">
                        <img src={logo} alt="Logo" height={"40px"} width={"40px"} className="" />
                    </NavLink>
                </div>

                {/*title*/}
                <div className="hidden md:flex h-full">
                    <ul className="flex space-x-6 justify-center items-center ">
                        <li><a  className="text-white hover:text-gray-300" >Portfolio</a></li>
                        <li><a  className="text-white hover:text-gray-300" >Projects</a></li>
                        <li><a  className="text-white hover:text-gray-300" >Certificates</a></li>
                        <li><a  className="text-white hover:text-gray-300" >Experience</a></li>
                        <li><a  className="text-white hover:text-gray-300" >Contact</a></li>
                    </ul>
                </div>

                {/*    username*/}
                <div className="flex h-full  relative border-2 px-2 py-1 rounded-lg " onClick={clickHandler}>
                    <img src={logo} alt="" className="h-8 text-white rounded-full mr-2" />
                    <span className="h-8 mt-1 text-white rounded-full">UserName</span>
                    {isOpen && (
                       <div className={"flex items-center   mt-2 flex-col z-10 max-w-max gap-y-3 bg-yellow-100 rounded-xl absolute top-14 right-[-10px] transition-all duration-200 ease-out "}>

                           {/*1*/}
                               <button className={"text-lg group "}>
                                  <div className={"flex  w-[225px] space-x-4 items-center group-hover:bg-red-300 transition-all duration-200 rounded-xl pl-2 mt-2  "}>
                                      <CgProfile fontSize={"2rem"} />
                                      <span>Update Profile</span>
                                  </div>
                               </button>

                           {/*2*/}
                               <button className={"text-lg group"} onClick={handleShare}>
                                   <div className={"flex  w-[225px] space-x-4 items-center group-hover:bg-red-300 transition-all duration-200 rounded-xl pl-2   "}>
                                       <FaShareAlt fontSize={"2rem"} />
                                       <span>Share</span>
                                   </div>
                               </button>

                           {/*3*/}
                               <button className={"text-lg group"}>
                                   <div className={"flex w-[225px] space-x-4 items-center group-hover:bg-red-300 transition-all duration-200 rounded-xl pl-2 "}>
                                       <BiSolidHelpCircle fontSize={"2rem"} />
                                       <span>Help & Support</span>
                                   </div>
                               </button>

                           {/*4*/}
                               <button className={"text-lg pb-2 group"}>
                                   <div className={"flex  w-[225px] space-x-4 items-center group-hover:bg-red-300 transition-all duration-200 rounded-xl pl-2 "}>
                                       <FiLogOut fontSize={"2rem"} />
                                       <span>Log out</span>
                                   </div>
                               </button>

                       </div>
                    )}
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
