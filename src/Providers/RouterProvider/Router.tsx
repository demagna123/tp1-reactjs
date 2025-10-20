import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Forgot from "../../Pages/PasswordForgot/Forgot";
// import Welcome from "../../Pages/Welcome/Welcome";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import Project from "../../Pages/Projects/Project";
import AddProject from "../../Pages/Addproject/AddProject";
import ProjectCreate from "../../Pages/Projects/Create/Create";
import ProjectEdit from "../../Pages/Projects/Edit/Edit";
import ProjectShow from "../../Pages/Projects/Show/Show";
import ProjectList from "../../Pages/Projects/List/List";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Project />,
  // },
  {
    path: "/add",
    element: <AddProject />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/projects",
    children: [
      {
        index: true,
        element: <ProjectList />,
      },
      {
        path: "create",
        element: <ProjectCreate />,
      },

      {
        path: ":id/edit",
        element: <ProjectEdit />,
      },
      
      {
        path: ":id/show",
        element: <ProjectShow />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
