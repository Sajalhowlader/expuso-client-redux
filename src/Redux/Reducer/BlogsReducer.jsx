import { LOAD_BLOGS } from "../ActionTypes/ActionTypes";

const initialState = {
  blogs: [],
};
const blogsReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};
export default blogsReducer;
