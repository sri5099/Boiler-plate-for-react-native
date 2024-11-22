import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setAccessToken, clearAccessToken, getAccessToken} from '../../utils';
const initialState = {
  accessToken: null,
  isLoading: true,
};

export const authIsLogedIn = createAsyncThunk('authIsLogedIn', async () => {
  const accessToken = await getAccessToken();
  const tokens = {accessToken};
  return tokens;
});

export const login = createAsyncThunk('login', async tokens => {
  return tokens;
});

export const register = createAsyncThunk('login', async tokens => {
  return tokens;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.accessToken = null;
      clearAccessToken();
    },
  },
  extraReducers: {
    [authIsLogedIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [authIsLogedIn.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isLoading = false;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      setAccessToken(action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.isLoading = false;
    },
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      setAccessToken(action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.isLoading = false;
    },
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
