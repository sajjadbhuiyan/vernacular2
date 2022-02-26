import Link from "next/link";
import { useState } from "react";

const Topbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/*Mobile responsive sidebar*/}
      <div
        className={
          showMenu
            ? "w-full h-full absolute z-40 opacity-100"
            : "w-full h-full absolute z-40 opacity-0"
        }
      >
        <div
          className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        ></div>
        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-white lg:hidden transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <div className="flex items-center justify-between px-8">
                <div className="h-16 w-full flex items-center"></div>
                <div
                  id="closeSideBar"
                  className="flex items-center justify-center h-10 w-10"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <ul aria-orientation="vertical" className=" py-6">
                <Link href="/" passHref>
                  <li className="py-4 px-2 mx-2 mb-2 rounded-md cursor-pointer bg-blue-300">
                    <div className="text-center">
                      <a>Home</a>
                    </div>
                  </li>
                </Link>
                <Link href="/profile" passHref>
                  <li className="py-4 px-2 mx-2 mb-2 rounded-md cursor-pointer bg-blue-300">
                    <div className="text-center">
                      <a>Profile</a>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
      <div className="w-full">
        {/* Navigation starts */}
        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
          <div
            className="text-gray-600 mr-8 visible lg:hidden relative"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              " "
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            )}
          </div>
        </nav>
        {/* Navigation ends */}
      </div>
    </>
  );
};

export default Topbar;
