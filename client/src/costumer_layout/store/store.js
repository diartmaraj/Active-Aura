import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './features/filter/filterSlice';
import productsSlice from './features/products/productsSlice';


const store = configureStore({
    reducer:{
        filters: filterReducer,
        products: productsSlice,

    }
    // Optional: you can add middleware or other store enhancers here
});

export default store;