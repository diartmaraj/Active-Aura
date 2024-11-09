import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const handleFetch = async (filters = {}) => {
  try {
    const response = await axios.get('http://localhost:5000/api/products/get', {
      params: filters,
    });

    return response.data.map(product => ({
      ...product,
      categoryName: product.category ? product.category.name : 'Unknown',
    }));
    
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (filters) => {

  return handleFetch(filters);
});


export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (categoryId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/products/get/category/${categoryId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
});

export const fetchProductsSpecialOffers = createAsyncThunk('products/fetchProductsSpecialOffers', async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/products/get/special-offers');
    return response.data;
  } catch (error) {
    throw error.response.data.message || error.message;
  }
})


export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  try {
    const response = await axios.post('http://localhost:5000/api/products/add', product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
});

export const editProduct = createAsyncThunk('products/editProduct', async (product) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/products/${product.id}`, product);
    return response.data;
  } catch (error) {
    console.error('Error editing product:', error);
    throw error;
  }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  try {
    await axios.delete(`http://localhost:5000/api/products/${productId}`);
    return productId;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
});
const  initialState = {
  items: [],
  specialOffers: [],
  filters: {
    category: [],
    subcategory: [] ,
    brand: [],
    rating: [],
    discount: [],
    color: [],
    size: [],
    material: [],
    gender: [],
    availability: []
  },
  status: 'idle',
  specialOffersStatus: 'idle',  
    error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterType, value, checked } = action.payload;
      
      if (checked) {
        state.filters[filterType].push(value);
      } else {
        state.filters[filterType] = state.filters[filterType].filter(item => item !== value);
      }
    },
    resetFilters(state) {
      state.filters = {
        category: [],
        subcategory: [],
        brand: [],
        rating: [],
        discount: [],
        color: [],
        size: [],
        material: [],
        gender: [],
        availability: []
      };
    },
    resetState: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
         .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; 
      })
      .addCase(fetchProductsSpecialOffers.pending, (state) => {
        state.specialOffersStatus = 'loading';
      })
      .addCase(fetchProductsSpecialOffers.fulfilled, (state, action) => {
        state.specialOffersStatus = 'succeeded';
        state.specialOffers = action.payload;
      })
      .addCase(fetchProductsSpecialOffers.rejected, (state, action) => {
        state.specialOffersStatus = 'failed';
        state.specialOffersError = action.payload;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      });
  },
});

export const { resetState, setFilter, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;
