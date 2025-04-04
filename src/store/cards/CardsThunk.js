import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCards = createAsyncThunk("cards/fetch", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://dummyjson.com/posts"); 
    return response.data.posts; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetching error"); 
  }
});
