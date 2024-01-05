import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth, setTokens } from '../store/slices/authSlice'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8090/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  // console.log(result)
  if (result?.error?.status === 401 && api.endpoint !== 'getRegistration') {
    const authData = api.getState().auth
    // console.log(authData)
    const refreshResult = await baseQuery(
      {
        url: 'auth/login',
        method: 'PUT',
        body: JSON.stringify({
          access_token: authData.access,
          refresh_token: authData.refresh,
        }),
        headers: {
          'content-type': 'application/json',
        },
      },
      api,
      extraOptions,
    )
    if (refreshResult.data) {
      console.log(refreshResult)
      api.dispatch(
        setTokens({
          access: refreshResult.data.access_token,
          refresh: refreshResult.data.refresh_token,
        }),
      )
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(setAuth(null))
    }
  }
  return result
}

export const artApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['credentials'],
  endpoints: (build) => ({
    fetchAllArticles: build.query({
      query: () => ({
        url: `ads`,
      }),
    }),
    getArticlesByUserId: build.query({
      query: (id) => `ads/?user_id=${id}`,
    }),
    getCommentsById: build.query({
      query: (id) => `ads/${id}/comments`,
    }),
    getRegistration: build.mutation({
      query: (data) => ({
        url: `auth/register`,
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),
    }),
    getCredentials: build.query({
      query: () => ({
        url: `user`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'credentials', id })),
              { type: 'credentials', id: 'LIST' },
            ]
          : [{ type: 'credentials', id: 'LIST' }],
    }),
    uploadAvatar: build.mutation({
      query: (file) => ({
        url: `user/avatar`,
        method: 'POST',
        body: file,
        invalidatesTags: [{ type: 'credentials', id: 'LIST' }],
      }),
    }),
    changeCredentials: build.mutation({
      query: (data) => ({
        url: `user`,
        method: 'PATCH',
        body: data,
        invalidatesTags: [{ type: 'credentials', id: 'LIST' }],
      }),
    }),
  }),
})

export const {
  useFetchAllArticlesQuery,
  useGetArticlesByUserIdQuery,
  useGetCommentsByIdQuery,
  useGetRegistrationMutation,
  useLoginUserMutation,
  useGetCredentialsQuery,
  useUploadAvatarMutation,
  useChangeCredentialsMutation,
} = artApi
