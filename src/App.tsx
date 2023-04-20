import { Fragment } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { NavBar } from "components";

import { Routes } from "./routes";

import "global.scss";

type RouteType = {
  component: React.FunctionComponent;
  path?: string;
  index?: boolean;
};

const App = () => {
  const mappedRoute = Routes.map(
    ({ index, component: Component, path }: RouteType, routeKey) => {
      return (
        <Route
          key={routeKey}
          index={index}
          path={path}
          element={<Component />}
          errorElement={<div>Error...</div>}
        />
      );
    }
  );

  const router = createBrowserRouter(createRoutesFromElements(mappedRoute));

  return (
    <Fragment>
      <NavBar />
      <RouterProvider router={router} fallbackElement={<div>Error</div>} />
    </Fragment>
  );
};

export default App;

