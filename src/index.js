import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { CommonStoreProvider } from "./Store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommonStoreProvider>
  <NextUIProvider>
    <App />
  </NextUIProvider>
  </CommonStoreProvider>,
);
