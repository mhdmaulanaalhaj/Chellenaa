import React from "react";
import { navLink } from "../data/dummy";
import logo from "../asset/logo.svg";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
      <div className="w-[103px] h-[25px]">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <ul className="hidden md:flex">
        <li className="flex gap-x-4">
          {navLink.map((item) => {
            return (
              <Link
                to={item.id}
                key={item.id}
                className="hover:text-orange-500 cursor-pointer text-sm md:text-md"
              >
                {item.name}
              </Link>
            );
          })}
        </li>
      </ul>
      <div className="flex items-center gap-[5px]">
        <button className="px-6 lg:px-8 py-2 text-sm bg-white outline-none hover:bg-orange-500 hover:text-white rounded-full ">
          Sign In
        </button>
        <CiMenuFries className="text-2xl  block md:hidden" />
      </div>
      <div className="flex md:hidden absolute top-0 right-0 w-full h-screen bg-white">
        <IoCloseSharp />

        <ul className="hidden md:flex">
          <li className="flex gap-x-4">
            {navLink.map((item) => {
              return (
                <Link
                  to={item.id}
                  key={item.id}
                  className="hover:text-orange-500 cursor-pointer text-sm md:text-md"
                >
                  {item.name}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
