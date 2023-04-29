import { Link } from "react-scroll";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from "i18next";

function LanguageDropDown({ languageDropDown, setLanguageDropDown }) {
 
  function handleClick(lang) {
    i18next.changeLanguage(lang);
    setLanguageDropDown("none")
  }

  
  return (
    <div
      className={
        languageDropDown
          ? "bg-white rounded-lg fixed top-[80px] sm:top-[60px] md:top-[70px] lg:top-[80px] sm:mr-8 mr-16 w-[50px] z-10 "
          : "bg-white rounded-lg fixed top-[100px] w-[100px] z-10 right-[-100%]  "
      }
    >
      <div className="bg-black rounded-md w-[60px]">
      <div
        style={{ display: `${languageDropDown}` }}
        className="z-10 h-[30px]
          dark:bg-gray-700 flex text-center"
      >
        <div className="flex items-center  space-x-2 pt-2 pl-1">
        <h2 onClick={()=>handleClick('geo')} className="text-white hover:text-red-400 uppercase text-xs  cursor-pointer">Geo</h2>
        <img src="/flagg.svg" alt="" className="w-[20px] h-[20px]"/>
        </div>
      </div>
      <div
        style={{ display: `${languageDropDown}` }}
        className="z-10 h-[30px]
         dark:bg-gray-700 flex text-center"
      >
         <div className="flex items-center  space-x-2 pt-2 pl-1">
        <h2  onClick={()=>handleClick('en')} className="text-white hover:text-red-400  uppercase text-xs  cursor-pointer">Eng</h2>
        <img src="/flage.svg" alt="" className="w-[20px] h-[20px]"/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default LanguageDropDown;
