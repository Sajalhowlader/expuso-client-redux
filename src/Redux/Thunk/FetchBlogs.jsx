import { loadBlogs } from "../Actions/Actions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:5000/blogs");
    const data = await response.json();

    if (data.length) {
      dispatch(loadBlogs(data));
    }
  };
};

export default fetchBlogs