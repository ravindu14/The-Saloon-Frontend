// @flow
import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("modules/home")),
  },
];

export default routes;
