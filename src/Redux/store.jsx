import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import blogsReducer from "./Reducer/BlogsReducer";
const store = createStore(
  blogsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
