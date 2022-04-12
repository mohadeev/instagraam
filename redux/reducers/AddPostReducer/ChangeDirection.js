import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  direction: "create",
  discardvar: false,
};

export const ChangeDirection = createSlice({
  name: "StoreRedux",
  initialState,
  reducers: {
    ToChangeReducer: (state, action) => {
      state.direction = action.payload;
    },
    ToDescardReducer: (state, action) => {
      state.discardvar = !state.discardvar;
    },
  },
});

export const { ToChangeReducer, ToDescardReducer } = ChangeDirection.actions;
const AllReducers = ChangeDirection.reducer;
export default AllReducers;
