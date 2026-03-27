import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default routes;
