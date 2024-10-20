import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  brands: [],
  status: 'idle',
  error: null,
};

// Fetch brands
export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const response = await axios.get('http://localhost:5000/api/brands/get');
  return response.data;
});

// Add a brand
export const addBrand = createAsyncThunk('brands/addBrand', async (brand) => {
  const response = await axios.post('http://localhost:5000/api/brands/add', brand);
  return response.data;
});

// Update a brand
export const updateBrand = createAsyncThunk('brands/updateBrand', async (brand) => {
  const response = await axios.put(`http://localhost:5000/api/brands/get/${brand.id}`, brand);
  return response.data;
});

// Delete a brand
export const deleteBrand = createAsyncThunk('brands/deleteBrand', async (brandId) => {
  await axios.delete(`http://localhost:5000/api/brands/delete/${brandId}`);
  return brandId;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBrand.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        const index = state.items.findIndex((brand) => brand._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.items = state.items.filter((brand) => brand._id !== action.payload);
      });
  },
});

export default brandsSlice.reducer;
