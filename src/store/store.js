import { configureStore } from "@reduxjs/toolkit";
import globalSummaryReducer from "./Reducers/GlobalSummaryReducer";

export const store = configureStore({
  reducer: {
    globalSummaryReducer: globalSummaryReducer,
  },
});
