import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
    credentials: 'include', // Ensures cookies are sent with requests (if needed)
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // Get token from auth state
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); // Attach token if available
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/accounts/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/accounts/register/',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
export default authApi;
