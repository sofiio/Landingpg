function DropDownMenu({ dropDown }) {
  return (
    <div
      className={
        dropDown
          ? "bg-white fixed top-[100px] right-[90px] w-[100px] z-10 "
          : "bg-white fixed top-[100px] w-[100px] z-10 right-[-100%]  "
      }
    >
      <div
        style={{ display: `${dropDown}` }}
        className="z-10  bg-slate-200 
        rounded shadow w-44 dark:bg-gray-700"
      >
        <ul className="text-bookmark-blue uppercase text-xs">
          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Home
          </li>

          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Tours
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Hotels
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Environment
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
