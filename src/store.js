import modalReducer from "./slice/modalSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    modals: modalReducer,
  },
});
