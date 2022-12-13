import React from "react";
import bannerPhoto from "../../assets/header-bg.jpg";
const Banner = () => {
  return (
    <div className="banner_container h-[88vh]  relative">
      <img className="h-[100%] object-cover" src={bannerPhoto} alt="" />
      <div className="absolute top-[50%] left-[50%] banner_info text-center font-bold text-white">
        {" "}
        <span className="text-[30px]">WELCOME</span> <br /> <span className="text-[60px]">TO MY AWESOME PHOTOGRAPHY BLOG</span>
      </div>
    </div>
  );
};

export default Banner;
