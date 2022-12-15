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
 console.log(blogs.length)
  if (blogs) {
    allblogs = blogs.map((blog) => <Blog blog={blog} key={blog._id} />);
  }

  return <section>{allblogs}</section>;
};

export default Blogs;
