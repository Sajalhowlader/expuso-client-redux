import React, { useEffect } from "react";
import { BiTime } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import getSingleBlog from "../Redux/Thunk/FetchSingleBlog";
const ShowBlogsDetails = () => {
  const dispatch = useDispatch();
  const { blogsId } = useParams();
  useEffect(() => {
    dispatch(getSingleBlog(blogsId));
  }, []);

  const navigate = useNavigate();
  const singleBlogs = useSelector((state) => state.seemore);
  const { _id, image, title, author, time, date, content } = singleBlogs;

  return (
    <>
      {singleBlogs._id && (
        <div className="blog_info w-3/5 mx-auto my-10">
          <img src={image} alt="" className="max-w-full rounded-lg" />
          <h2 className="text-3xl font-bold py-3">{title}</h2>
          <p className="flex items-center gap-2 text-xl ">
            <BsFillPersonFill className="text-[#ff0047]" />

            <span className="font-semibold"> {author}</span>
          </p>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <MdOutlineDateRange className="text-[#004eff]" />{" "}
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <BiTime className="text-[#004eff]" />
              <span>{time}</span>
            </div>
          </div>
          <p className="py-2">{content}</p>
        </div>
      )}
      <button
        onClick={() => navigate("/")}
        className="back fixed bottom-4 left-4 bg-[#072e85] py-1 px-4 font-bold text-white rounded-md"
      >
        back
      </button>
    </>
  );
};

export default ShowBlogsDetails;
