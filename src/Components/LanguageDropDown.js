import { Link } from "react-scroll";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from "i18next";

function LanguageDropDown({ languageDropDown }) {
 
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div
      className={
        languageDropDown
          ? "bg-white rounded-lg fixed top-[80px] sm:top-[60px] md:top-[70px] lg:top-[80px] sm:mr-8 mr-16 w-[50px] z-10 "
          : "bg-white rounded-lg fixed top-[100px] w-[100px] z-10 right-[-100%]  "
      }
    >
      <div className="bg-black rounded-md">
      <div
        style={{ display: `${languageDropDown}` }}
        className="z-10 h-[30px]
          dark:bg-gray-700 flex text-center"
      >
        <h2 onClick={()=>handleClick('geo')} className="text-white hover:text-red-400 uppercase text-xs pt-2 cursor-pointer">Geo</h2>
      </div>
      <div
        style={{ display: `${languageDropDown}` }}
        className="z-10 h-[30px]
         dark:bg-gray-700 flex text-center"
      >
        <h2  onClick={()=>handleClick('en')} className="text-white hover:text-red-400  uppercase text-xs pt-2 cursor-pointer">Eng</h2>
      </div>
      </div>
    </div>
  );
}

export default LanguageDropDown;
