import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const UpdateBlogModal = ({ blogData }) => {
  const { _id, image, title, author, date, time, content } = blogData;

  const updateTime = moment().format("LTS");
  const UpdateDate = moment().format("MMM Do YY");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const handleUpdateBlog = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative max-w-3xl">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle  bg-rose-600 absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex  justify-center items-center">
            <div className="add_blog w-[90%] text-center border-double border-4 border-indigo-600">
              <h2 className="text-center font-bold text-xl py-4 mb-5 border-b-2 border-indigo-900">
                Update Blog
              </h2>

              <form
                onSubmit={handleSubmit(handleUpdateBlog)}
                className="add_blog_from"
              >
                <div className="flex gap-4 justify-center items-center">
                  <div className="flex flex-col text-left my-2">
                    <label htmlFor="">Blog Image</label>
                    <input
                      defaultValue={image}
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
                      defaultValue={title}
                      {...register("blogTitle", {
                        required: {
                          value: true,
                          message: "add a title",
                        },
                      })}
                      placeholder="Enter your blog title"
                      type="text"
                    />
                    <p className="font-bold text-red-500">
                      {errors.blogTitle?.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <div className="flex flex-col text-left my-2">
                    <label htmlFor="">Added Time</label>
                    <input
                      value={time}
                      className="font-bold text-slate-700"
                      placeholder="Enter your blog image"
                      type="text"
                      {...register("blogTime")}
                    />
                  </div>
                  <div className="flex flex-col text-left my-2">
                    <label htmlFor="">Added Date</label>
                    <input
                      value={date}
                      className="font-bold text-slate-700"
                      placeholder="Enter your blog title"
                      type="text"
                      {...register("blogDate")}
                    />
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <div className="flex flex-col text-left my-2">
                    <label htmlFor="">UPdate Time</label>
                    <input
                      value={updateTime}
                      className="font-bold text-slate-700"
                      placeholder="Enter your blog image"
                      type="text"
                      {...register("updateTime")}
                    />
                  </div>
                  <div className="flex flex-col text-left my-2">
                    <label htmlFor="">Update Date</label>
                    <input
                      value={UpdateDate}
                      className="font-bold text-slate-700"
                      placeholder="Enter your blog title"
                      type="text"
                      {...register("updateDate")}
                    />
                  </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                  <div className="flex flex-col text-left my-2">
                    <label htmlFor="">Author Name</label>
                    <input
                      defaultValue={author}
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
                      className="h-20"
                      defaultValue={content}
                      placeholder="Enter your blog content"
                      type="text"
                      {...register("blogContent", {
                        required: {
                          value: true,
                          message: "Plz.. add a blog content.",
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
                  value="Update"
                  className="submit_input bg-[#018578d9] font-bold text-white mt-10 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlogModal;
