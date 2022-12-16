import { semoreContent } from "../Actions/Actions";

const getSingleBlog = (blogsId) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:5000/singleBlog/${blogsId}`);
    console.log(response);
    const singleBlog = await response.json();
    if (singleBlog) {
      dispatch(semoreContent(singleBlog ));
    }
  };
};
export default getSingleBlog;
