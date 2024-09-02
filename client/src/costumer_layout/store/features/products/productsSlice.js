// productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../constants'; // Adjust path as needed

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    // Define any actions if needed
    // For example, to update a product or add new ones
    // addProduct: (state, action) => { state.push(action.payload); },
  },
});

export default productsSlice.reducer;