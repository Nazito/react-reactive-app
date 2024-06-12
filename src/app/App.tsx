import "reflect-metadata";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { container } from "tsyringe";
import React from "react";

import "./index.css";

import { routeTree } from "../routeTree.gen";
import AuthService from "../core/services/AuthService";

container.registerSingleton(AuthService);
const router = createRouter({ routeTree });

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
