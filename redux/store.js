import { configureStore } from "@reduxjs/toolkit";
// import AddPostReducers from "./reducers/AddPostReducer"
import AddPostReducers from "./reducers/AddPostReducer";
import AddImagesReducer from "./reducers/AddPostReducer/CreatePost";
import ChangeDirection from "./reducers/AddPostReducer/ChangeDirection";
import UserFormLogin from "./reducers/user/UserFormLogin";

export const store = configureStore({
  reducer: {
    AddPostReducers,
    AddImagesReducer,
    ChangeDirection,
    UserFormLogin,
  },
});

const makeStore = () => store;

// export const Persistor = storPersist(store);
