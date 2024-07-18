import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Router from "./router.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <Router />
    </ConfigProvider>
  </React.StrictMode>
);
