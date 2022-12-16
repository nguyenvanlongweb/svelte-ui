// component route
import Home from "./Home.svelte";
import About from "./About.svelte";
import Search from "./Search.svelte";

//component layout
import SearchLayout from "~/layouts/SearchLayout.svelte";

type CustomRoute = {
  path: string;
  component: any;
  layout?: any;
};

const routes: CustomRoute[] = [
  { path: "/", component: Home },
  { path: "search", component: Search, layout: SearchLayout },
  {
    path: "about",
    component: About,
    layout: SearchLayout,
  },
];

export default routes;
