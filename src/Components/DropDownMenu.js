import { Link } from "react-scroll";
import { useTranslation, initReactI18next } from "react-i18next";

function DropDownMenu({ dropDown }) {
  const { t } = useTranslation();
  return (
    <div
      className={
        dropDown
          ? "bg-white rounded-lg fixed top-[100px] right-[90px] w-[100px] z-10 "
          : "bg-white rounded-lg fixed top-[100px] w-[100px] z-10 right-[-100%]  "
      }
    >
      <div
        style={{ display: `${dropDown}` }}
        className="z-10  bg-black
        rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul className="text-white uppercase text-xs pt-4 pb-4">
          <li className="block px-4 py-2  cursor-pointer hover:bg-red-500">
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              {t('home')}
            </Link>
          </li>

          <li className="block hover:bg-red-500  px-4 py-2  cursor-pointer">
            <Link
              to="tours"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              {t('tours')}
            </Link>
          </li>
          <li className="block hover:bg-red-500 px-4 py-2 cursor-pointer">
            <Link
              to="hotels"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              {t('hotels')}
            </Link>
          </li>
          <li className="block hover:bg-red-500 px-4 py-2 cursor-pointer">
            <Link
              to="landmarks"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              {t('explore')}
            </Link>
          </li>
          <li className="block px-4 py-2 hover:bg-red-500 cursor-pointer">
            <Link
              to="environment"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              {t('environment')}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
