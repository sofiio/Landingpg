import { Link } from "react-scroll";

function DropDownMenu({ dropDown }) {
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
              Home
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
              Tours
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
              Hotels
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
              Explore
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
              Environment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
