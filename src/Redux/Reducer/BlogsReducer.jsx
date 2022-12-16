import { LOAD_BLOGS, SEE_MORE } from "../ActionTypes/ActionTypes";

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
    default:
      return state;
  }
};
export default blogsReducer;
