import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  categories: [],
  status: 'idle',
  error: null
};

// Async thunk for fetching categories
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/category/get');
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
});

// Async thunk for adding a category
export const addCategory = createAsyncThunk('categories/addCategory', async (newCategory) => {
  const response = await axios.post('http://localhost:5000/api/category/add', newCategory);
  return response.data;
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async (category) => {
  const response = await axios.put(`http://localhost:5000/api/categories/update/${category.id}`, category);
  return response.data;
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (categoryId) => {
  await axios.delete(`http://localhost:5000/api/categories/delete/${categoryId}`);
  return categoryId;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.items.findIndex((category) => category.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter((category) => category.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
