import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { Generator } from "./components";

import "./styles/main.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Generator />
    <ToastContainer />
  </React.StrictMode>
);
