import {CONFIG} from '../../constants';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//users related api
export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),

  endpoints: builder => ({
    signIn: builder.mutation({
      query: body => {
        return {
          url: `/login`,
          method: 'POST',
          body: JSON.stringify({
            username: 'testuser',  // Replace with the actual username
            password: 'testpassword' // Replace with the actual password
        }),
          responseHandler: async response => {
            const data = await response.json();
            const headers = response.headers;
            return {data, headers};
          },
        };
      },
    }),

    signUp: builder.mutation({
      query: body => {
        return {
          url: `/authaccount/registration`,
          method: 'POST',
          body,
          responseHandler: async response => {
            const data = await response.json();
            const headers = response.headers;
            return {data, headers};
          },
        };
      },
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = authAPI;
