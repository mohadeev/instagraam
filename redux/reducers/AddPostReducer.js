import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  AddPostCondestion: false,
};

export const AddPostReducers = createSlice({
  name: "StoreRedux",
  initialState,
  reducers: {
    AddPostReducer: (state, action) => {
      state.AddPostCondestion = !state.AddPostCondestion;
    },
  },
});

export const { AddPostReducer } = AddPostReducers.actions;
const AllReducers = AddPostReducers.reducer;
export default AllReducers;
