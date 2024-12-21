import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setAccessToken, clearAccessToken, getAccessToken} from '../../utils';

const initialState = {
  accessToken: null,
  isLoading: true,
};

export const authIsLoggedIn = createAsyncThunk('authIsLoggedIn', async () => {
  const accessToken = await getAccessToken();
  const tokens = {accessToken};
  return tokens;
});

export const login = createAsyncThunk('login', async (tokens) => {
  // Simulate an API call to log in
  return tokens; // Ideally, this should return a response with accessToken
});

export const register = createAsyncThunk('register', async (tokens) => {
  // Simulate an API call to register
  return tokens; // Ideally, this should return a response with accessToken
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      clearAccessToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authIsLoggedIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authIsLoggedIn.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isLoading = false;
      })
      .addCase(authIsLoggedIn.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        setAccessToken(action.payload.accessToken);
        state.accessToken = action.payload.accessToken;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        setAccessToken(action.payload.accessToken);
        state.accessToken = action.payload.accessToken;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;