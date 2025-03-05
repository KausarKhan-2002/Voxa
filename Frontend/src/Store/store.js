import { configureStore } from "@reduxjs/toolkit";
import userAccessReducer from "./userAccessSlice"

const store = configureStore({
  reducer: {
    userAccessInfo: userAccessReducer,
  },
});

export default store;
