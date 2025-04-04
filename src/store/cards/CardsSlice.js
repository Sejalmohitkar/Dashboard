import { createSlice } from "@reduxjs/toolkit";
import { getCards } from "./CardsThunk";

const cardsSlice = createSlice({
    name:"card",
    initialState:{
    cards:[]
    },
    setFilter: (state, action) => {
        state.filter = { ...state.filter, ...action.payload };
      },
    extraReducers:(builder)=>{
        builder.addCase(getCards.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getCards.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.cards=action.payload;
        })
        .addCase(getCards.rejected,(state,action)=>{
            state.status="failed",
            state.error =action.error.message;
        });
    },
});

export default cardsSlice.reducer;