import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/ProductSlice";
import userReducer from "./user/UserSlice";
import cardReducer from "./cards/CardsSlice"
import wishlistReducer from './wishlist/WishlistSlice'

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
    card: cardReducer,
    wishlist: wishlistReducer,
  },
});

export default store;