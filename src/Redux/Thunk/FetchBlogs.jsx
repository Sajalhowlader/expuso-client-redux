import { loadBlogs } from "../Actions/Actions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://expusoserver-production.up.railway.app/blogs"
    );
    const data = await response.json();

    if (data.length) {
      dispatch(loadBlogs(data));
    }
  };
};

export default fetchBlogs;
