import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./UserThunk";

const UserSlice = createSlice({
    name:"user",
    initialState:{
    users:[]
    },
    setFilter: (state, action) => {
        state.filter = { ...state.filter, ...action.payload };
      },
    extraReducers:(builder)=>{
        builder.addCase(getUser.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.users=action.payload;
        })
        .addCase(getUser.rejected,(state,action)=>{
            state.status="failed",
            state.error =action.error.message;
        });
    },
});

export default UserSlice.reducer;