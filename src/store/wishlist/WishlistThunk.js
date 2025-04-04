import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlist = createAsyncThunk("wishlist/fetch", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://dummyjson.com/users"); 
    return response.data.users; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetching error"); 
  }
});
