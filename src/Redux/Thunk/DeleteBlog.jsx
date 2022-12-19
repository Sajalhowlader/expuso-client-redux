import { deleteBlog } from "../Actions/Actions";

const deleteABlog = (blogId) => {
  console.log(blogId);
  return async (dispatch, getState) => {
    const sure = window.confirm("Are You Want To Delete ?");
    if (sure) {
      const response = await fetch(
        `https://expusoserver-production.up.railway.app/deleteBlog/${blogId}`,
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
