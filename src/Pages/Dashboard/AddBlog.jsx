import moment from "moment/moment";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addANewBlog from "../../Redux/Thunk/AddNewBlog";
const AddBlog = () => {
  const time = moment().format("LTS");
  const date = moment().format("MMM Do YY");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const addNewBlog = (data) => {
    const blog = {
      image: data.blogImg,
      title: data.blogTitle,
      author: data.authorName,
      time: data.blogTime,
      date: data.blogDate,
      content: data.blogContent,
    };
    dispatch(addANewBlog(blog));
    reset();
  };
  return (
    <div className="flex h-[100%] justify-center items-center">
      <div className="add_blog w-[50%] text-center border-double border-4 border-indigo-600">
        <h2 className="text-center font-bold text-xl py-4 mb-5 border-b-2 border-indigo-900">
          Add Blog
        </h2>

        <form onSubmit={handleSubmit(addNewBlog)} className="add_blog_from">
          <div className="flex gap-4 justify-center items-center">
            <div className="flex flex-col text-left my-2">
              <label htmlFor="">Blog Image</label>
              <input
                placeholder="Enter your blog image"
                type="text"
                {...register("blogImg", {
                  required: {
                    value: true,
                    message: "Plz.. add a blog image.",
                  },
                })}
              />
              <p className="font-bold text-red-500">
                {errors.blogImg?.message}
              </p>
            </div>
            <div className="flex flex-col text-left my-2">
              <label htmlFor="">Blog Title</label>
              <input
                placeholder="Enter your blog title"
                type="text"
                {...register("blogTitle", {
                  required: {
                    value: true,
                    message: "Plz.. add a blog title.",
                  },
                })}
              />
              <p className="font-bold text-red-500">
                {errors.blogTitle?.message}
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex flex-col text-left my-2">
              <label htmlFor="">Add Time</label>
              <input
                className="font-bold text-slate-700"
                value={time}
                placeholder="Enter your blog image"
                type="text"
                {...register("blogTime")}
              />
            </div>
            <div className="flex flex-col text-left my-2">
              <label htmlFor="">Blog Date</label>
              <input
                className="font-bold text-slate-700"
                value={date}
                placeholder="Enter your blog title"
                type="text"
                {...register("blogDate")}
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex flex-col text-left my-2">
              <label htmlFor="">Author Name</label>
              <input
                placeholder="Enter your blog image"
                type="text"
                {...register("authorName", {
                  required: {
                    value: true,
                    message: "Plz.. add a author name.",
                  },
                })}
              />
              <p className="font-bold text-red-500">
                {errors.authorName?.message}
              </p>
            </div>
            <div className="flex flex-col text-left my-2">
              <label htmlFor="">Blog content</label>
              <textarea
                placeholder="Enter your blog content"
                type="text"
                {...register("blogContent", {
                  required: {
                    value: true,
                    message: "Plz.. add a blog title.",
                  },
                })}
              />
              <p className="font-bold text-red-500">
                {errors.blogContent?.message}
              </p>
            </div>
          </div>
          <input
            type="submit"
            value="Add"
            className="submit_input bg-[#018578d9] font-bold text-white mt-10"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
