import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShoppinProvider from "./context/ShoppinContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppinProvider>
      <App />
    </ShoppinProvider>
  </BrowserRouter>
);
