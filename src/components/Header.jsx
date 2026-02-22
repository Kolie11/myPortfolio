import React, { useState } from "react";
import myImg from "../assets/mathCart.jpg";
import { RiHomeHeartFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  // // state to control the hamburger menu
  const [isMenuOpen, setIsMenuopen] = useState(true);

  const handleToggle = () => {
    setIsMenuopen((prevMenuOpen) => !prevMenuOpen);

  };
  return (
    <header className=" bg-sky-950 text-white h-35 w-full py-4 px-10 md:h-20 fixed shadow-xl z-50 top-0">
      <nav className="flex flex-col md:flex-row items-center  md:justify-between gap-4 md:gap-0 ">
        <div className="flex items-center ">
          <img
            className="w-10 rounded-full h-10 object-cover"
            src={myImg}
            alt="my own image"
          />

          <div className=" md:block">
            <h1 className="ml-2 text-sm md:text-xl">Fassou Mathias Kolie</h1>
            <div className="flex items-center">
              <span className="ml-2 w-3 h-3 bg-green-500 rounded-full hidden md:block"></span>
              <span className="ml-2 hidden md:block">Verfügbar für Arbeit</span>
            </div>
          </div>
        </div>

        {/* icons-container */}
        {isMenuOpen && (
          <div className="shadow border-t-2 p-2 rounded-2xl flex items-center  gap-2 md:gap-8 text-2xl ">
            <NavLink
              to="/"
              className="cursor-pointer hover:bg-slate-950 hover:rounded-full p-1.5 transition ease-in hover:scale-120 duration-200"
            >
              <RiHomeHeartFill />
            </NavLink>
            <NavLink
              to="/übermich"
              className="cursor-pointer hover:bg-slate-950 hover:rounded-full p-1.5 transition ease-in hover:scale-120 duration-200"
            >
              <CiUser />
            </NavLink>
            <NavLink
              to="/erfahrung"
              className="cursor-pointer hover:bg-slate-950 hover:rounded-full p-1.5 transition ease-in hover:scale-120 duration-200"
            >
              <IoBagRemoveOutline />
            </NavLink>
            <NavLink
              to="/logos"
              className="cursor-pointer hover:bg-slate-950 hover:rounded-full p-1.5 transition ease-in hover:scale-120 duration-200"
            >
              <IoFolderOpenOutline />
            </NavLink>
            <NavLink className="cursor-pointer hover:bg-slate-950 hover:rounded-full p-1.5 transition ease-in hover:scale-120 duration-200">
              <IoCallOutline />
            </NavLink>
          </div>
        )}
        {/* Button to toggle menu hamburger */}

        <button
          onClick={handleToggle}
          className="block md:hidden text-xl bg-slate-950 p-2 mx-2 top-5 absolute right-0 cursor-pointer shadow-2xl rounded-md hover:bg-slate-900 transition duration-300"
        >
          {isMenuOpen ? <IoCloseSharp className="text-xl" /> : <IoMdMenu className="text-xl" />}
        </button>
      </nav>
    </header>
  );
}

export default Header;
