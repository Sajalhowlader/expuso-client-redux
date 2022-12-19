import { addABlog } from "../Actions/Actions";

const addANewBlog = (blog) => {
  return async (dispatch, getState) => {
    const sendNewBlog = await fetch("expuso.up.railway.app/addABlog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await sendNewBlog.json();
    if (response.acknowledged) {
      alert("Blog Add Successfully");

      dispatch(
        addABlog({
          id: response.insertedId,
          ...blog,
        })
      );
    }
  };
};
export default addANewBlog;
