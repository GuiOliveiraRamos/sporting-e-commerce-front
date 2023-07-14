import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ResetStyle from "./style/ResetStyle";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ResetStyle />
      <GlobalStyle />
      <App />
  </React.StrictMode>
);
