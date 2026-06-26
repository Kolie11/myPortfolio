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
import { useLanguage } from "../LanguageContext";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  // Track which link is currently hovered (null = none)
  const [hoveredLink, setHoveredLink] = useState(null);
  const { t, lang, setLang } = useLanguage();

  const handleToggle = () => {
    setIsMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className="bg-black text-slate-100 h-40 w-full py-4 px-10 md:h-24 fixed shadow-xl z-50 top-0">
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
          <span className="ml-2 hidden md:block">{t("Verfügbar für Arbeit", "Available for work")}</span>
            </div>
          </div>
        </div>

        {/* icons-container */}
        {isMenuOpen && (
          <div className="shadow border-t-2 p-2 rounded-2xl flex items-center gap-2 md:gap-8 text-2xl ">
            <div className="relative" onMouseEnter={() => setHoveredLink("home")} onMouseLeave={() => setHoveredLink(null)}>
              <NavLink
                to="/"
              className="cursor-pointer hover:bg-blue-600 hover:rounded-full p-1.5 transition ease-in hover:scale-125 duration-200 block"
              >
                <RiHomeHeartFill />
              </NavLink>
              {hoveredLink === "home" && <span className="absolute left-1/2 -translate-x-1/2 top-full text-xs mt-1.5 bg-slate-900 p-2 rounded-full whitespace-nowrap">{t("Startseite", "Home")}</span>}
            </div>

            <div className="relative" onMouseEnter={() => setHoveredLink("about")} onMouseLeave={() => setHoveredLink(null)}>
              <NavLink
                to="/übermich"
              className="cursor-pointer hover:bg-blue-600 hover:rounded-full p-1.5 transition ease-in hover:scale-125 duration-200 block"
              >
                <CiUser />
              </NavLink>
              {hoveredLink === "about" && <span className="absolute left-1/2 -translate-x-1/2 top-full text-xs mt-1.5 bg-slate-900 p-2 rounded-full whitespace-nowrap">{t("Über mich", "About")}</span>}
            </div>

            <div className="relative" onMouseEnter={() => setHoveredLink("experience")} onMouseLeave={() => setHoveredLink(null)}>
              <NavLink
                to="/erfahrung"
              className="cursor-pointer hover:bg-blue-600 hover:rounded-full p-1.5 transition ease-in hover:scale-125 duration-200 block"
              >
                <IoBagRemoveOutline />
              </NavLink>
              {hoveredLink === "experience" && <span className="absolute left-1/2 -translate-x-1/2 top-full text-xs mt-1.5 bg-slate-900 p-2 rounded-full whitespace-nowrap">{t("Erfahrung", "Experience")}</span>}
            </div>

            <div className="relative" onMouseEnter={() => setHoveredLink("work")} onMouseLeave={() => setHoveredLink(null)}>
              <NavLink
                to="/portfolio"
              className="cursor-pointer hover:bg-blue-600 hover:rounded-full p-1.5 transition ease-in hover:scale-125 duration-200 block"
              >
                <IoFolderOpenOutline />
              </NavLink>
              {hoveredLink === "work" && <span className="absolute left-1/2 -translate-x-1/2 top-full text-xs mt-1.5 bg-slate-900 p-2 rounded-full whitespace-nowrap">{t("Projekte", "Work")}</span>}
            </div>

            <div className="relative" onMouseEnter={() => setHoveredLink("contact")} onMouseLeave={() => setHoveredLink(null)}>
              <NavLink
                to="/kontakt"
              className="cursor-pointer hover:bg-blue-600 hover:rounded-full p-1.5 transition ease-in hover:scale-125 duration-200 block"
              >
                <IoCallOutline />
              </NavLink>
          {hoveredLink === "contact" && <span className="absolute left-1/2 -translate-x-1/2 top-full text-xs mt-1.5 bg-slate-900 p-2 rounded-full whitespace-nowrap">{t("Kontakt", "Contact")}</span>}
            </div>
        
        <button 
          onClick={() => setLang(lang === 'de' ? 'en' : 'de')} 
          className="ml-4 text-sm font-bold bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-full transition duration-300"
        >
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
          </div>
        )}
        {/* Button to toggle menu hamburger */}

        <button
          onClick={handleToggle}
          className="block md:hidden text-xl bg-neutral-800 p-2 mx-2 top-5 absolute right-0 cursor-pointer shadow-2xl rounded-md hover:bg-blue-600 transition duration-300"
        >
          {isMenuOpen ? <IoCloseSharp className="text-xl" /> : <IoMdMenu className="text-xl" />}
        </button>
      </nav>
    </header>
  );
}

export default Header;




