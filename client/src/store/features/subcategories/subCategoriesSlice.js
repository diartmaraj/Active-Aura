import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  subCategories: [],
  status: 'idle',
  error: null
};

// Async thunk for fetching subcategories
export const fetchSubCategories = createAsyncThunk('subCategories/fetchSubCategories', async () => {
  const response = await axios.get('http://localhost:5000/api/sub-category/get');
  return response.data;
});

// Async thunk for adding a subcategory
export const addSubCategory = createAsyncThunk('subCategories/addSubCategory', async (newSubCategory) => {
  const response = await axios.post('http://localhost:5000/api/sub-category/add', newSubCategory);
  return response.data;
});

export const updateSubCategory = createAsyncThunk('subCategories/updateSubCategory', async (subCategory) => {
  const response = await axios.put(`http://localhost:5000/api/subCategories/update/${subCategory.id}`, subCategory);
  return response.data;
});

export const deleteSubCategory = createAsyncThunk('subCategories/deleteSubCategory', async (subCategoryId) => {
  try {
    await axios.delete(`http://localhost:5000/api/sub-category/delete/${subCategoryId}`);
    return subCategoryId;
  } catch (error) {
    console.error('Error deleting subcategory:', error);
    throw error;
  }
  
});

const subCategorySlice = createSlice({
  name: 'subCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addSubCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateSubCategory.fulfilled, (state, action) => {
        const index = state.items.findIndex((subCategory) => subCategory.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(deleteSubCategory.fulfilled, (state, action) => {
        state.items = state.items.filter((subCategory) => subCategory.id !== action.payload);
      });
  },
});

export default subCategorySlice.reducer;
