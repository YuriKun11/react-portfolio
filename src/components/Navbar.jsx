import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-black text-white">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="#home"
          className="flex items-center gap-2 ml-6"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="text-[18px] font-bold cursor-pointer flex text-white">
            Yuri &nbsp;
            <span className="sm:block hidden"></span>
          </p>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          <li className="hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-white text-[18px] font-medium cursor-pointer">
            <a href="#tech">Tech</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center mr-6">
          <div>
            {toggle ? (
              <FaTimes
                className="w-6 h-6 cursor-pointer text-white"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <FaBars
                className="w-6 h-6 cursor-pointer text-white"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a href="#home" onClick={() => setToggle(!toggle)}>
                  Home
                </a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a href="#projects" onClick={() => setToggle(!toggle)}>
                  Projects
                </a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a href="#tech" onClick={() => setToggle(!toggle)}>
                  Tech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
