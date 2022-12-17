import React from "react";
import { FaBackward } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#b0afff2e]">
      <button
        onClick={() => navigate("/")}
        className=" mx-auto flex items-center gap-2 text-white font-bold text-2xl py-2"
      >
        <FaBackward /> Expuso
      </button>
<nav className="flex flex-col gap-5 text-center mt-5">

      <NavLink to="addBlog" className="bg-green-400 text-white font-bold mx-2 py-2 rounded-md">Add Blog</NavLink>
      <NavLink to="manageBlog" className="bg-green-400 text-white font-bold mx-2 py-2 rounded-md">Manage Blog</NavLink>
</nav>
    </div>
  );
};

export default Sidebar;
