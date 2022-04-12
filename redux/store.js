import { configureStore } from "@reduxjs/toolkit";
// import AddPostReducers from "./reducers/AddPostReducer"
import AddPostReducers from "./reducers/AddPostReducer";
import AddImagesReducer from './reducers/AddPostReducer/CreatePost'
import ChangeDirection from "./reducers/AddPostReducer/ChangeDirection";
export const store = configureStore({
  reducer: { AddPostReducers , AddImagesReducer  , ChangeDirection},
});

const makeStore = () => store;

// export const Persistor = storPersist(store);
