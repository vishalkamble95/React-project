import { FaCartPlus } from "react-icons/fa";

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { HiStatusOnline } from "react-icons/hi";
import { HiStatusOffline } from "react-icons/hi";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-orange-50 shadow-md p-4 m-2 rounded-lg">
      <div className="logo-container">
        <img
          className="w-20 h-20 object-contain ml-14"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-4 text-gray-800 font-medium">
          <li className="flex items-center px-4">
            Online Status:{" "}
            {onlineStatus ? (
              <HiStatusOnline className="text-green-600 ml-1" />
            ) : (
              <HiStatusOffline className="text-red-500 ml-1" />
            )}
          </li>
          <li className="px-4 hover:text-red-500 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-red-500 transition-all">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-red-500 transition-all">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-red-500 transition-all">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-red-500 transition-all">
            <FaCartPlus />
            Cart
          </li>
          <li className="px-4">
            <button
              className="px-4 py-1 bg-yellow-300 text-gray-800 rounded-lg shadow-sm hover:bg-yellow-400 transition-all cursor-pointer"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
