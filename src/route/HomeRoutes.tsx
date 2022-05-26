import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/pagee404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
// import { NotFound } from "../components/pages/NotFound";


export const HomeRoutes = [
  {
    children: <Home />,
    exact: true,
    path: "/",
  },
  {
    children: <Setting />,
    exact: false,
    path: "/setting",
  },
  {
    children: <UserManagement />,
    exact: false,
    path: "/user_management",
  },
  {
    children: <Page404 />,
    exact: false,
    path: "*",
  }
]



