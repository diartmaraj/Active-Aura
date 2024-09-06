// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../../utils/setAuthToken";

const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null, 
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.user = action.payload.user; // Ensure this is set correctly
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user)); // Also update localStorage
        setAuthToken(action.payload.token);
      },
    logout: (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
  
        // Remove token from localStorage
        localStorage.removeItem('token');
  
        // Remove the token from the headers
        setAuthToken(null);
    },
    initializeAuthState: (state) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token) {
          state.token = token;
          state.isAuthenticated = true;
          state.user = user;
  
          // Set the token in the headers for future requests
          setAuthToken(token);
        }
      },
  },
});

export const { login, logout, initializeAuthState } = authSlice.actions;
export default authSlice.reducer;
