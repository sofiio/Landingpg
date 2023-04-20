import React from "react";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { useRef } from "react";
import { Link } from "react-scroll";
import LanguageDropDown from "./LanguageDropDown";
import { useTranslation, initReactI18next } from "react-i18next";

function Header() {
  const [dropDown, setDropDown] = useState("none");
  const [languageDropDown, setLanguageDropDown] = useState("none");

  function ToggleDropDown() {
    if (dropDown === "none") setDropDown("block");
    else setDropDown("none");
  }

  function  ToggleLanguageDropDown() {
    if (languageDropDown === "none") setLanguageDropDown("block");
    else setLanguageDropDown("none");
  }

  const { t } = useTranslation();

  return (
    <div className="w-full bg-white sticky z-10 top-0">
    <nav className="container font-Poppins flex items-center py-4  ">
      <div onClick={() => setDropDown("none")}>
       <Link to="main"><img src="/travel-map.svg" alt="" className="w-[100px] sm:w-[50px] md:w-[70px] lg:w-[100px] cursor-pointer" /></Link>
      </div>
      <ul className="hidden sm:flex flex-1 justify-center items-center gap-12  text-xs  text-bookmark-blue">
        <div className="flex lg:gap-12 sm:gap-6 md:gap-10">
          <li className="cursor-pointer hover:text-red-700"><Link to="main" spy={true} smooth={true} offset={-150} duration={500}>{t('home')}</Link></li>
          <li className="cursor-pointer hover:text-red-700" ><Link to="tours" spy={true} smooth={true} offset={-150} duration={500}>{t('tours')}</Link></li>
          <li className="cursor-pointer hover:text-red-700"><Link to="hotels" spy={true} smooth={true} offset={-150} duration={500}>{t('hotels')}</Link></li>
          <li className="cursor-pointer hover:text-red-700"><Link to="landmarks" spy={true} smooth={true} offset={-150} duration={500}>{t('explore')}</Link></li>
          <li className="cursor-pointer hover:text-red-700"><Link to="environment" spy={true} smooth={true} offset={-150} duration={500}>{t('environment')}</Link></li>
        </div>
      </ul>



      <div className="flex justify-end mx-4 items-center gap-12 sm:gap-4 text-xs text-bookmark-blue">
        <div className="flex"  onClick={ToggleLanguageDropDown} >
          <h2 className="cursor-pointer hover:text-red-700">{t('en')}</h2>
          <img src="/Vector11.svg" alt="" className=" cursor-pointer"/>
        </div>
        <LanguageDropDown  languageDropDown={ languageDropDown} setLanguageDropDown={setLanguageDropDown} />
        <h2 className="cursor-pointer hover:text-red-700">{t('log_in')}</h2>
      </div>



      <div className="inline-flex flex-1 justify-end md:hidden sm:hidden">
        <button onClick={ToggleDropDown} type="button" className=" p-2 ">
           <img src="/Frame64.svg" alt="" className="" />
        </button>
        <DropDownMenu dropDown={dropDown} setDropDown={setDropDown} />
      </div>
    </nav>
    </div>
  );
}

export default Header;
