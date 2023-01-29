import React from "react";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

function Header() {
  const [dropDown, setDropDown] = useState("none");

  function ToggleDropDown() {
    if (dropDown === "none") setDropDown("block");
    else setDropDown("none");
  }

  return (
    <div className="w-full bg-white sticky z-10 top-0">
    <nav className="container font-Poppins flex items-center py-4  ">
      <div onClick={() => setDropDown("none")}>
        <img src="/travel-map.svg" alt="" className="w-[100px] sm:w-[50px] md:w-[70px] lg:w-[100px]" />
      </div>
      <ul className="hidden sm:flex flex-1 justify-center items-center gap-12  text-xs  text-bookmark-blue">
        <div className="flex lg:gap-12 sm:gap-6 md:gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Tours</li>
          <li className="cursor-pointer">Hotels</li>
          <li className="cursor-pointer">Explore</li>
          <li className="cursor-pointer">Environment</li>
        </div>
      </ul>



      <div className="flex justify-end mx-4 items-center gap-12 sm:gap-4 text-xs text-bookmark-blue">
        <div className="flex">
          <h2>En</h2>
          <img src="/Vector11.svg" alt="" className="" />
        </div>
        <h2>Log in</h2>
        <button>
          <img src="/Frame64.svg" alt="" className="" />
        </button>
      </div>



      <div className="inline-flex flex-1 justify-end md:hidden sm:hidden">
        <button onClick={ToggleDropDown} type="button" className=" p-2 ">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <DropDownMenu dropDown={dropDown} setDropDown={setDropDown} />
      </div>
    </nav>
    </div>
  );
}

export default Header;
