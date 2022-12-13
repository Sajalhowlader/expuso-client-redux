import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-sky-600 py-3">
      <div className="header_container flex container mx-auto justify-around items-center py-[7px] font-bold rounded-xl text-white ">
        <div className="site_name">
          <h2 className="text-2xl">
            <span className="text-[40px]">E</span>XPUSO
          </h2>
        </div>
        <div className="search flex items-center w-[250px] px-2 bg-white rounded-lg text-indigo-500">
          <input
            className="bg-transparent outline-none py-[5px]  w-full"
            type="text"
            name=""
            id=""
            placeholder="search"
          />
          <FaSearchPlus />
        </div>
        <ul>
          <NavLink className="mx-[6px] text-lg" to="/">
            Home
          </NavLink>
          <NavLink className="mx-[6px] text-lg" to="/">
            All Blogs
          </NavLink>
          <NavLink className="mx-[6px] text-lg" to="/">
            About
          </NavLink>
          <NavLink className="mx-[6px] text-lg" to="/">
            Dashboard
          </NavLink>
          <NavLink
            className="get-start mx-[6px] bg-[#ff0349] text-white rounded-[4px] text-lg py-[7px] px-[25px]"
            to="/"
          >
            Get Start
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
