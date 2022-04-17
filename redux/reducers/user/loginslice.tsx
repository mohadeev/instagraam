import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  AddPostCondestion: false,
};

export const LogInAndSingUp = createSlice({
  name: "login",
  initialState,
  reducers: {
    LogInAndSingUpReducer: (state, action) => {
      state.AddPostCondestion = !state.AddPostCondestion;
    },
  },
});

export const { LogInAndSingUpReducer } = LogInAndSingUp.actions;
const AllReducers = LogInAndSingUp.reducer;
export default AllReducers;
