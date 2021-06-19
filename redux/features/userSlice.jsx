import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
    },
    setLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userId = null;
    },
  },
});

export const { setActiveUser, setLogOutState } = userSlice.actions;

export const selectUserName = (state) => state.userName;
export const selectUserEmail = (state) => state.userEmail;
export const selectUserId = (state) => state.userId;
export default userSlice.reducer;
