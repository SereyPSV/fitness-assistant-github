import { RouteObject, useRoutes } from "react-router-dom";
import { routes } from "../routes/routes";
import { Navbar } from "./navigation/navbar";

export const App = () => {
  const elements = useRoutes(routes() as RouteObject[]);
  return (
    <>
      <Navbar />
      <main>{elements}</main>
    </>
  );
};
