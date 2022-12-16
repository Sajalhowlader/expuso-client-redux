import { createBrowserRouter } from "react-router-dom";
import ShowBlogsDetails from "../Component/ShowBlogsDetails";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogsDetails/:blogsId",
        element: <ShowBlogsDetails />,
      },
    ],
  },
]);
export default routes;
