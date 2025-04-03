import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/ProductSlice";
import userReducer from "./user/UserSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});

export default store;