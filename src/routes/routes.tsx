import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import ErrorPage from "../pages/ErrorPage";
import { IAppRoute } from "../types";
import { HOME } from "./pathnames";

const HomePage = WithSuspense(lazy(() => import("../pages/Home")));

export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: "*", element: <ErrorPage /> },
];
