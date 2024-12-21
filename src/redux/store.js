import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import authReducer from './reducers/authReducer';
import { authAPI } from './services';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authAPI.reducerPath]: authAPI.reducer, // Ensure authAPI is correctly defined
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(authAPI.middleware),
  devTools: process.env.NODE_ENV !== 'production', // Enable devTools only in development
});

// Call setupListeners after the store is created
setupListeners(store.dispatch);

export default store; // Ensure you export the store