import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { container } from "tsyringe";
import MockApiService from "./core/services/MockApiService";
import AuthService from "./core/services/AuthService";

container.registerSingleton(MockApiService);
container.registerSingleton(AuthService);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
