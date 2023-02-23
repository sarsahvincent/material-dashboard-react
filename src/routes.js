import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import AddItems from "layouts/add-items";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Purchased Items",
    key: "purchased_items",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/purchased_items",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Add Items",
    key: "add_items",
    icon: <Icon fontSize="small">add_circle</Icon>,
    route: "/add_items",
    component: <AddItems />,
  },
  {
    type: "collapse",
    name: "Sell Items",
    key: "sell_items",
    icon: <Icon fontSize="small">sell</Icon>,
    route: "/sell_items",
    component: <Tables />,
  },

  {
    type: "collapse",
    name: "My Stock",
    key: "my_stock",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "/my_stock",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
