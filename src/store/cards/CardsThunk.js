import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCards = createAsyncThunk("cards/get", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://dummyjson.com/posts"); 
    return response.data.posts; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetching error"); 
  }
});

//post method
export const postCards = createAsyncThunk("cards/post",async (formData) => {
  try {
    const response = await axios.post('https://dummyjson.com/posts/add',formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch cards parts');
  }
});

// delete method
export const deleteCards = createAsyncThunk(
  'cards/deleteCards',
  async (id, { rejectWithValue }) => {
    try {
      console.log("Deleting card with ID:", id);
      await axios.delete(`https://dummyjson.com/posts/${id}`);
      return id; 
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//put method
export const putCards = createAsyncThunk(
  'cards/putCards',
  async ({id, updatedData}, rejectWithValue) => {
    try{
      console.log("Updating card with ID:", id)
      const response = await axios.put(`https://dummyjson.com/posts/${id}`, updatedData);
      return response.data;
    }catch(error){
      return rejectWithValue(error.response.data);
    }    
  }
);

//patch method
export const patchCards = createAsyncThunk(
  'cards/patchCards',
  async ({id, updatedData}, rejectWithValue) => {
    try{
      console.log("Updating card with patch method:", id)
      const response = await axios.patch(`https://dummyjson.com/posts/${id}`, updatedData);
      return response.data;
    }catch(error) {
      return rejectWithValue(error.response.data);
    }
  }
)
