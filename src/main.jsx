import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { GinProvider } from "./context/GinContext.jsx";
import { VodkaProvider } from "./context/VodkaContxt.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VodkaProvider>
    <GinProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GinProvider>
    </VodkaProvider>
  </React.StrictMode>
);
