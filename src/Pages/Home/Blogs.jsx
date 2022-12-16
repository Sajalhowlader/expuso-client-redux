import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogs from "../../Redux/Thunk/FetchBlogs";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  const state = useSelector((state) => state);
  // console.log(state);

  let allblogs;
  const blogs = useSelector((state) => state.blogs);
  
  if (blogs) {
    allblogs = blogs.map((blog) => <Blog blog={blog} key={blog._id} />);
  }

  return (
    <section className="py-10">
      <h2 className="text-center font-bold text-4xl py-4 mb-5 border-b-2 border-indigo-900">
        My Blogs
      </h2>
      <div className="updates  flex gap-4 justify-center">
        <button className="bg-indigo-500 py-1 px-3 text-white font-bold rounded-md">
          First Upload
        </button>
        <button className="bg-indigo-500 py-1 px-3 text-white font-bold rounded-md">
          Last Upload
        </button>
      </div>
      {allblogs}
    </section>
  );
};

export default Blogs;
