import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  SharedWord: "switch",
};

export const UserFormLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    UserFormLoginReducer: (state, action) => {
      state.SharedWord = action.payload;
    },
  },
});

export const { UserFormLoginReducer } = UserFormLogin.actions;
const AllReducers = UserFormLogin.reducer;
export default AllReducers;
