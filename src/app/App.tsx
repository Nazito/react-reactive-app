import { RouterProvider, createRouter } from "@tanstack/react-router";

import React from "react";

import "./index.css";

import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree });

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
