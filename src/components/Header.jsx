import React, { useContext, useState } from "react";
import Logo from "../assets/images/logo.jpeg";
import { Shoppin } from "../context/ShoppinContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { headerTrue } = useContext(Shoppin);

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Apple Watch Series 10",
    "Apple Watch Hermès Series 10",
    "Apple Watch SE",
  ];

  return (
    <div
      className={`${
        headerTrue && "flex items-center justify-between"
      } z-[9999]`}
    >
      <img
        src={Logo}
        alt="logo image"
        className="md:w-24 md:h-auto w-auto h-[17px]"
      />

      {headerTrue && location.pathname === "/apple-watch" && (
        <div className="flex justify-between items-center w-[55%]">
          <div className="relative inline-block ">
            {/* Dropdown Button */}
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 outline-none"
            >
              Collections
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute  mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full "
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {item}
                      <hr />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="bg-[#0171E3] w-20 h-10 text-white rounded-full">
            save
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
