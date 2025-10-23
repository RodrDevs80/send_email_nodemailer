import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import EmailForm from "./EmailForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailForm />
  </StrictMode>
);
