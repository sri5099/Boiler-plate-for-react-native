import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Function to check if user is logged in
export const authIsLoggedIn = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return token !== null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;

      // Store token in AsyncStorage
      AsyncStorage.setItem('accessToken', action.payload.accessToken);
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    registerStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;

      // Store token in AsyncStorage
      AsyncStorage.setItem('accessToken', action.payload.accessToken);
    },
    registerFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;

      // Remove token from AsyncStorage
      AsyncStorage.removeItem('accessToken');
    },
    setAuthFromStorage(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
  },
});

// Action creators
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
  setAuthFromStorage,
} = authSlice.actions;

export default authSlice.reducer;
