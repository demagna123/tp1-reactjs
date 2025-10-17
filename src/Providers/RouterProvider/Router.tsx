import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Forgot from "../../Pages/PasswordForgot/Forgot";
// import Welcome from "../../Pages/Welcome/Welcome";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
