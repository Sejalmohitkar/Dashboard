import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("product/fetch", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://dummyjson.com/products"); 
    return response.data.products; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetching error"); 
  }
});


