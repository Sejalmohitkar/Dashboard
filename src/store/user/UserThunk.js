import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
    try{
        const response = await axios.get("https://dummyjson.com/users");
        return response.data.users;
    }catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetching error");
    } 
});

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getUser = createAsyncThunk("user/fetch", async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.get("https://dummyjson.com/users");
//     return response.data.users; // Ensure this is correct
//   } catch (error) {
//     return rejectWithValue(error.response?.data || "Failed to fetch users");
//   }
// });
