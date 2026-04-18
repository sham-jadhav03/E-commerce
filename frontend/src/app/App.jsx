import { RouterProvider } from "react-router";
import { routes } from "./routes/AppRoutes";
import "./index.css";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
     
    </>
  );
}

export default App;
