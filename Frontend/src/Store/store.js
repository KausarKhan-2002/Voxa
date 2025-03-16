import { configureStore } from "@reduxjs/toolkit";
import userAccessReducer from "./userAccessSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    userAccessInfo: userAccessReducer,
    userInfo: userReducer
  },
});

export default store;