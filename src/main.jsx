import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wakayoub from "./components/Wakayoub.jsx";
import HomePage from "./components/Homepage.jsx";
import AdventCalendar from "./components/adventcalendar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/adventcalendar",
        element: <AdventCalendar />,
      },
      {
        path: "/game",
        element: <Wakayoub />,
      },
      {
        path: "*",
        element: <h1>Error 404 : Not Found Ayoub</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
