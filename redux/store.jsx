import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

export default combineReducers({
  userReducer,
});
