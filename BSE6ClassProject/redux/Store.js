import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
