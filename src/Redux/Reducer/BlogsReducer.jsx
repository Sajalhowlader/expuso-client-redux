import {
  ADD_BLOG,
  DELETE_BLOG,
  LOAD_BLOGS,
  SEE_MORE,
  UPDATE_BLOG,
} from "../ActionTypes/ActionTypes";

const initialState = {
  blogs: [],
  seemore: {},
};
const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case SEE_MORE:
      return {
        ...state,
        seemore: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};
export default blogsReducer;
