import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import HealthCheckResult from "../views/frontend/HealthCheckResult";

import Table from "../views/frontend/Table";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/health_check_result",
        element: <HealthCheckResult />,
      },
      {
        path: "/table",
        element: <Table />,
      },
    ],
  },
];

export default routes;
