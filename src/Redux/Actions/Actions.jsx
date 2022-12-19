import {
  ADD_BLOG,
  DELETE_BLOG,
  LOAD_BLOGS,
  SEE_MORE,
  UPDATE_BLOG,
} from "../ActionTypes/ActionTypes";

export const loadBlogs = (blogs) => {
  return {
    type: LOAD_BLOGS,
    payload: blogs,
  };
};
export const semoreContent = (blogs) => {
  return {
    type: SEE_MORE,
    payload: blogs,
  };
};
export const addABlog = (blogs) => {
  return {
    type: ADD_BLOG,
    payload: blogs,
  };
};
export const updateBlog = (id) => {
  return {
    type: UPDATE_BLOG,
    payload: id,
  };
};
export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};
