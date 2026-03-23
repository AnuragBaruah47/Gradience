import { useState, useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Page/Home";
import RouteError from "./Shared/Components/RouteError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<RouteError />} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
