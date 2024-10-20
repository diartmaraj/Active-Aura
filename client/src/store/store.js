import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './features/products/productsSlice';
import authReducer from './features/auth/authSlice';
import categoryReducer from './features/categories/categorySlice';
import subCategoryReducer from './features/subcategories/subCategoriesSlice';
import brandsReducer from './features/brands/brandsSlice';


const store = configureStore({
    reducer:{
        products: productsSlice,
        auth: authReducer,
        categories: categoryReducer,
        subCategories: subCategoryReducer,
        brands: brandsReducer

    }
    // Optional: you can add middleware or other store enhancers here
});

export default store;