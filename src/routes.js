import Dashboard from "views/dashboard/Dashboard.js";
import Icons from "views/dashboard/Icons.js";
import {Opinion} from "views/dashboard/Opinion";
import {ReporteError} from "views/dashboard/ReporteError";
import TableList from "views/dashboard/TableList.js";
import UserProfile from "views/dashboard/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "tim-icons icon-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Perfil",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/personas",
    name: "Personas",
    icon: "tim-icons icon-book-bookmark",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/reporte",
    name: "Reporte error",
    icon: "tim-icons icon-sound-wave",
    component: ReporteError,
    layout: "/admin"
  },
  {
    path: "/opinion",
    name: "Opinión",
    icon: "tim-icons icon-chat-33",
    component: Opinion,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-puzzle-10",
    component: Icons,
    layout: "/admin"
  },
];
export default routes;
