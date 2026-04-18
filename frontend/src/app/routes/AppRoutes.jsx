import { createBrowserRouter } from "react-router";
import Register from "../../features/pages/Register";
import Login from "../../features/pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    
  }
]);
