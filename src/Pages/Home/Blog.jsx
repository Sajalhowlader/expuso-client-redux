import React from "react";
import { BiTime } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
const Blog = ({ blog }) => {
  const { image, title, author, time, date, content } = blog;
  return (
    <div className="blog_info w-3/5 mx-auto my-10">
      <img src={image} alt="" className="max-w-full rounded-lg" />
      <h2 className="text-3xl font-bold py-3">{title}</h2>
      <p className="flex items-center gap-2 text-xl ">
        <BsFillPersonFill className="text-[#ff0047]" />

        <span className="font-semibold"> {author}</span>
      </p>
      <div className="flex gap-5">
        <div className="flex items-center gap-1">
          <MdOutlineDateRange className="text-[#004eff]" /> <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <BiTime className="text-[#004eff]" />
          <span>{time}</span>
        </div>
      </div>
      <p className="py-2">{content.slice(0, 250) + "..."}</p>
      <div className="flex justify-end">
        <button className="text-[#ff006a] font-bold">See More..</button>
      </div>
    </div>
  );
};

export default Blog;
