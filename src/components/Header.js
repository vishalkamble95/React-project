import { FaCartPlus } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { HiStatusOffline } from "react-icons/hi";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
        <ul className="flex gap-1 text-gray-800 font-medium">
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
            <Link to="/cart">
              <div className="flex items-center">
                <FaCartPlus className="mr-2" />({cartItems.length} items)
              </div>
            </Link>
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
          <li className="px-4 hover:text-red-500 transition-all">{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
