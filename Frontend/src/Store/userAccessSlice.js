import { createSlice } from "@reduxjs/toolkit";

const userAccessSlice = createSlice({
  name: "userAccess",
  initialState: "",
  reducers: {
    getUserAccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { getUserAccess } = userAccessSlice.actions;
export default userAccessSlice.reducer;