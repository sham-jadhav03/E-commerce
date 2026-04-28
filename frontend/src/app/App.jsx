import { RouterProvider } from "react-router";
import { routes } from "./routes/AppRoutes";
import "./index.css";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useEffect } from "react";

function App() {
  const { handleGetMe } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, [handleGetMe]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
