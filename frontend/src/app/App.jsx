import { RouterProvider } from "react-router";
import { routes } from "./routes/AppRoutes";
import "./index.css";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { handleGetMe } = useAuth();

  const user = useSelector((state) => state.auth.user);

  console.log(user);

  useEffect(() => {
    handleGetMe();
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
