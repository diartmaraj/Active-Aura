import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    brands: [],
    ratings: [],
    discounts: [],
    appliedFilters: { 
        categories: [],
        brands: [],
        ratings: [],
        discounts: [],
    },
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        toggleCategory: (state, action) => {
            const category = action.payload;

            // Remove 'Shop All' if any other category is selected
            if (category !== 'Shop All' && state.appliedFilters.categories.includes('Shop All')) {
                state.appliedFilters.categories = state.appliedFilters.categories.filter(c => c !== 'Shop All');
            }

            // Toggle the selected category
            if (state.appliedFilters.categories.includes(category)) {
                state.appliedFilters.categories = state.appliedFilters.categories.filter(c => c !== category);
            } else {
                state.appliedFilters.categories.push(category);
            }
        },
        toggleBrand: (state, action) => {
            const brand = action.payload;
            if (state.appliedFilters.brands.includes(brand)) {
              state.appliedFilters.brands = state.appliedFilters.brands.filter(b => b !== brand);
            } else {
              state.appliedFilters.brands.push(brand);
            }
        },
        toggleRating: (state, action) => {
            const rating = action.payload;
            if (state.appliedFilters.ratings.includes(rating)) {
              state.appliedFilters.ratings = state.appliedFilters.ratings.filter(r => r !== rating);
            } else {
              state.appliedFilters.ratings.push(rating);
            }
        },
        toggleDiscount: (state, action) => {
            const discount = action.payload;
            if (state.appliedFilters.discounts.includes(discount)) {
              state.appliedFilters.discounts = state.appliedFilters.discounts.filter(d => d !== discount);
            } else {
              state.appliedFilters.discounts.push(discount);
            }
        },
        applyFilters: (state) => {
            // Copy the applied filters to the main state
            state.categories = [...state.appliedFilters.categories];
            state.brands = [...state.appliedFilters.brands];
            state.ratings = [...state.appliedFilters.ratings];
            state.discounts = [...state.appliedFilters.discounts];
        },
        applyCategory: (state) => {
            state.categories = [...state.appliedFilters.categories];
        },
        removeCategory: (state, action) => {
            const categoryToRemove = action.payload;
            state.appliedFilters.categories = state.appliedFilters.categories.filter(category => category !== categoryToRemove);
            state.categories = state.categories.filter(category => category !== categoryToRemove);
        },
        resetFilters: (state) => {
            state.categories = [];
            state.brands = [];
            state.ratings = [];
            state.discounts = [];
            state.appliedFilters = {
                categories: [],
                brands: [],
                ratings: [],
                discounts: [],
            };
        },

    }
});
export const {
        toggleCategory,
        toggleBrand,
        toggleRating,
        toggleDiscount,
        applyFilters,
        resetFilters,
        applyCategory,
        removeCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
