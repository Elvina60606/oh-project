import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/all.scss";

import { createHashRouter, RouterProvider } from "react-router";
import routes from "./route";
const router = createHashRouter(routes);

import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
