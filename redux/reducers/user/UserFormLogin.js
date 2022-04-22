import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  SharedWord: "switch",
};

export const UserFormLogin = createSlice({
  name: "login-forms",
  initialState,
  reducers: {
    UserFormLoginReducer: (state, action) => {
      state.SharedWord = action.payload.value;
    },
  },
});

export const { UserFormLoginReducer } = UserFormLogin.actions;
const AllReducers = UserFormLogin.reducer;
export default AllReducers;
