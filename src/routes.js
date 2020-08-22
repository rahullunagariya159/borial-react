import Index1 from "./pages/index1/index1";
import Index2 from "./pages/index2/index2";
import Index3 from "./pages/index3/index3";
import Index4 from "./pages/index4/index4";
import Index5 from "./pages/index5/index5";
import Index6 from "./pages/index6/index6";

const routes = [
  { path: "/index6", component: Index6 },
  { path: "/index5", component: Index5 },
  { path: "/index4", component: Index4 },
  { path: "/index3", component: Index3 },
  { path: "/index2", component: Index2 },
  { path: "/", component: Index1 },
];

export default routes;
