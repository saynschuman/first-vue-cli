import page1 from "../components/pages/page1";
import page2 from "../components/pages/page2";
import Async from "../components/common/getAsyncData";

export const routes = [
  {
    path: "/page1",
    component: page1
  },
  {
    path: "/page2",
    component: page2
  },
  {
    path: "/async",
    component: Async
  }
];
