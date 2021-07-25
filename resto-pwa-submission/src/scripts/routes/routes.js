/* eslint-disable quotes */
import Home from "../views/pages/home";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";

const routes = {
  "/": Home, // default routes
  "/home": Home,
  "/detail/:id": Detail,
  "/like": Like,
};

export default routes;
