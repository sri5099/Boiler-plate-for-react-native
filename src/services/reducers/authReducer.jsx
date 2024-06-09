import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {setAccessToken, clearAccessToken, getAccessToken} from '../../utils'
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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.accessToken = null;
      clearAccessToken();
    },
  },

 extraReducers: (builder) => {
   builder
     .addCase(authIsLogedIn.pending, (state) => {
       state.isLoading = true;
     })
     .addCase(authIsLogedIn.fulfilled, (state, action) => {
       state.accessToken = action.payload.accessToken;
       state.isLoading = false;
     })
     .addCase(login.pending, (state) => {
       state.isLoading = true;
     })
     .addCase(login.fulfilled, (state, action) => {
       setAccessToken(action.payload.accessToken);
       state.accessToken = action.payload.accessToken;
       state.isLoading = false;
     });

}

});

export const {logout} = authSlice.actions;

export default authSlice.reducer;