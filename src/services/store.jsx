import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; // Reducer for authentication state
import { setupListeners } from '@reduxjs/toolkit/query';
import authApi from './api';

const store = configureStore({
  reducer: {
    auth: authReducer, // Manages authentication state
    [authApi.reducerPath]: authApi.reducer, // RTK Query reducer for handling API caching
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // Middleware for API requests
});

setupListeners(store.dispatch); // Enables refetching on focus or network reconnect

export default store;
