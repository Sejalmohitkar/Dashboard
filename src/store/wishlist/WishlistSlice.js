import { createSlice } from "@reduxjs/toolkit";
import { getWishlist } from "./WishlistThunk";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    setFilter: (state, action) => {
        state.filter = { ...state.filter, ...action.payload };
      },
    extraReducers:(builder)=>{
        builder.addCase(getWishlist.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getWishlist.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.wishlist=action.payload;
        })
        .addCase(getWishlist.rejected,(state,action)=>{
            state.status="failed",
            state.error =action.error.message;
        });
    },
});

export default wishlistSlice.reducer;