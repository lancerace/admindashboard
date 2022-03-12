
import Icon from "@mui/material/Icon";
import Dashboard from './pages/dashboard';
const routes = [
    {
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard />,
    },
    {
        name: "Tables",
        key: "tables",
        icon: <Icon fontSize="small">table_view</Icon>,
        route: "/tables",
        component: <Dashboard />,
    },
    {
        name: "Billing",
        key: "billing",
        icon: <Icon fontSize="small">receipt_long</Icon>,
        route: "/billing",
        component: <Dashboard />,
    },
    {
        name: "rtl",
        key: "rtl",
        icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
        route: "/rtl",
        component: <Dashboard />,
    },
];

export default routes;
