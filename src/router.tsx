import { createBrowserRouter } from "react-router-dom";
import { BasisLayout } from "./screens/BasisLayout";
import { LoginScherm } from "./screens/LoginScherm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasisLayout />,
  },
  {
    path: "/login",
    element: <LoginScherm />,
  },
]);
