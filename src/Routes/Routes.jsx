import { createBrowserRouter } from "react-router-dom";
import ShowBlogsDetails from "../Component/ShowBlogsDetails";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import AddBlog from "../Pages/Dashboard/AddBlog";
import ManageBlog from "../Pages/Dashboard/ManageBlog";
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addBlog",
        element: <AddBlog />,
      },
      {
        path: "manageBlog",
        element: <ManageBlog />,
      },
    ],
  },
]);
export default routes;
