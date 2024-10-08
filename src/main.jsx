import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilteringProvider from "./contexts/FilteringProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilteringProvider>
      <App />
    </FilteringProvider>
  </StrictMode>
);
