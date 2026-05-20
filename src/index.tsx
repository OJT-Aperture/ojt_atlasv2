import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BasisLayout } from "./screens/BasisLayout";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BasisLayout />
  </StrictMode>,
);
