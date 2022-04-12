import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Images: [],
};

export const AddImagesReducer = createSlice({
  name: "StoreRedux",
  initialState,
  reducers: {
    AddOneImageReducer: (state, action) => {
      state.Images = [...state.Images, action.payload];
    },
  },
});

export const { AddOneImageReducer } = AddImagesReducer.actions;
const AllReducers = AddImagesReducer.reducer;
export default AllReducers;
