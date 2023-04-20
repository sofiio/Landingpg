import { Link } from "react-scroll";

function LanguageDropDown({ languageDropDown }) {
  return (
    <div
      className={
        languageDropDown
          ? "bg-white rounded-lg fixed top-[80px] sm:top-[60px] md:top-[70px] lg:top-[80px] sm:mr-8 mr-16 w-[50px] z-10 "
          : "bg-white rounded-lg fixed top-[100px] w-[100px] z-10 right-[-100%]  "
      }
    >
      <div
        style={{ display: `${languageDropDown}` }}
        className="z-10  bg-black h-[30px]
        rounded-lg shadow  dark:bg-gray-700 flex text-center"
      >
        <h2 className="text-white uppercase text-xs pt-2 cursor-pointer">Geo</h2>
      </div>
    </div>
  );
}

export default LanguageDropDown;
