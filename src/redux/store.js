import { configureStore } from "@reduxjs/toolkit";
import repositories from "./repositories/slice";

export const store = configureStore({
  reducer: {
    repositories,
  },
});
