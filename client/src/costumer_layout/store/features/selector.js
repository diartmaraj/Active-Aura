import { createSelector } from '@reduxjs/toolkit';

export const selectFilters = (state) => state.filters;
export const selectProducts = (state) => state.products;

export const selectFilteredProducts = createSelector(
  [selectFilters, selectProducts],
  (filters, products) => {
    const { categories, brands, ratings, discounts } = filters;

    if (categories.length === 0 || categories.includes("Shop All")) {
      return products.filter(product => {
        const matchesBrand = brands.length === 0 || brands.includes(product.brand);
        const matchesRating = ratings.length === 0 || ratings.includes(product.rating);
        const matchesDiscount = discounts.length === 0 || discounts.some(discount => product.discount >= discount);

        return matchesBrand && matchesRating && matchesDiscount;
      });
    }
     
    return products.filter(product => {
      const matchesCategory = categories.length === 0 || categories.includes(product.category);
      const matchesBrand = brands.length === 0 || brands.includes(product.brand);
      const matchesRating = ratings.length === 0 || ratings.some(rating => product.rating >= rating);
      const matchesDiscount = discounts.length === 0 || discounts.some(discount => product.discount >= discount);

      return matchesCategory && matchesBrand && matchesRating && matchesDiscount;
    });
  }
);
