import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import UpdateBlogModal from "../../Component/UpdateBlogModal";
import deleteABlog from "../../Redux/Thunk/DeleteBlog";
import fetchBlogs from "../../Redux/Thunk/FetchBlogs";

const ManageBlog = () => {
  const [blogData, setBlogData] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  const allBlogs = useSelector((state) => state.blogs);

  return (
    <div className="flex items-center justify-center h-screen">
      {allBlogs.length && (
        <div>
          {allBlogs.map((blog) => (
            <div
              key={blog._id}
              className="flex items-center gap-5 bg-[#f1f1f1] m-2 px-6 rounded-md manage_product_container"
            >
              <img
                src={blog.image}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover"
              />
              <span>{blog?.title?.slice(0, 5)}</span>
              <p>Date:{blog.date}</p>
              <p>Time:{blog.time}</p>
              <p>{blog.author}</p>
              <p>{blog?.content?.slice(0, 10)}</p>
              <label
                className="cursor-pointer"
                onClick={() => setBlogData(blog)}
                htmlFor="my-modal-3"
              >
                <FiEdit />
              </label>

              <AiOutlineDelete
                onClick={() => dispatch(deleteABlog(blog._id))}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
      {blogData && <UpdateBlogModal blogData={blogData} />}
    </div>
  );
};

export default ManageBlog;
