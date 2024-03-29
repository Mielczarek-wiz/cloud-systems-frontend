import { Route } from "@/types/Route";

const routes: Route[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Statistics",
    link: "/stats",
  },
];

export const getRoutes = (name: Route["name"]) => {
  const route = routes.find((route) => route.name === name);
  return route != undefined || route != null ? route.link : "/";
};
