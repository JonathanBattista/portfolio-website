import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">
        Jonathan Battista
      </h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#experience">Experience</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }>
        {/* Add a close button */}
        <div className="flex justify-between items-center m-4">
          <h1 className="text-3xl primary-color">Jonathan Battista</h1>
          <AiOutlineClose
            size={20}
            onClick={handleNav}
            className="cursor-pointer"
          />
        </div>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about" onClick={handleNav}>
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#work" onClick={handleNav}>
              Work
            </a>
          </li>
          <li className="p-2">
            <a href="#experience" onClick={handleNav}>
              Experience
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
