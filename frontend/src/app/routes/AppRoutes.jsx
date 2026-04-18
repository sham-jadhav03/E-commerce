import { createBrowserRouter } from "react-router";
import Register from "../../features/pages/Register";
import Login from "../../features/pages/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element:  <h1 className="bg-amber-200">hello world</h1>,
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
