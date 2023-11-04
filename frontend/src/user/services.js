import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
   reducerPath: 'userApi',
   baseQuery: fetchBaseQuery({ baseUrl: process.env['REACT_APP_BACKEND_URI'] }),
   endpoints: (builder)=> ({
      getUserList: builder.query({
	 query: ()=> `user`
      }),
      getUser: builder.query({
	 query: (id)=> `user/${id}`
      })
   })
});

export const { useGetUserListQuery,  useGetUserQuery } = userApi;


