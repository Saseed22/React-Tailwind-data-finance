
import {AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav=()=>{setNav(!nav)}


    return (
        <div className="flex justify-between h-24 items-center max-w-[1240px] mx-auto text-white">
            <h1 className="w-full text-3xl font-bold px-4 text-green-400">REACT.</h1>
            <ul className="sm:flex hidden ">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="cursor-pointer block sm:hidden">
                {nav? <AiOutlineClose className="h-7 w-7 mr-4" />:<AiOutlineMenu className="h-7 w-7 mr-4" />}
            </div>
            <div className={nav ?"fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] "}>
                <h1 className="w-full text-3xl font-bold px-4 mt-8 text-green-400">REACT.</h1>
                
                <ul className="p-4 uppercase ">
                <li className="p-4 border-b border-b-gray-600">Home</li>
                <li className="p-4 border-b border-b-gray-600">Company</li>
                <li className="p-4 border-b border-b-gray-600">Resource</li>
                <li className="p-4 border-b border-b-gray-600">About</li>
                <li className="p-4">Contact</li> 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
