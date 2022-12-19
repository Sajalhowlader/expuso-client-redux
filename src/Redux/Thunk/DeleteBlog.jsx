import { deleteBlog } from "../Actions/Actions";

const deleteABlog = (blogId) => {
  return async (dispatch, getState) => {
    const sure = window.confirm("Are You Want To Delete ?");
    if (sure) {
      const response = await fetch(
        `http://localhost:5000/deleteBlog/${blogId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.acknowledged) {
        dispatch(deleteBlog(blogId));
        alert("Delete Successful");
      }
    } else {
    }
  };
};
export default deleteABlog;