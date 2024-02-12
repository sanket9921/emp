import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "add-employee",
    element: <AddEmployeeComponent />,
  },
  {
    path: "edit-employee/:id",
    element: <AddEmployeeComponent />,
  },
]);

export default router;
