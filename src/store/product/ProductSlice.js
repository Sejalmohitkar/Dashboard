import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductThunk";

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    setFilter: (state, action) => {
        state.filter = { ...state.filter, ...action.payload };
      },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.products=action.payload;
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status="failed",
            state.error =action.error.message;
        });
    },
});

export default productSlice.reducer;