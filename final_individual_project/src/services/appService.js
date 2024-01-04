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
    console.log(authData)
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
      console.log(refreshResult.data)
      api.dispatch(
        setTokens({
          access: refreshResult.data.access_token,
          refresh: authData.refresh_token,
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
  endpoints: (build) => {
    return {
      fetchAllArticles: build.query({
        query: () => {
          return {
            url: `ads`,
          }
        },
      }),
      getArticlesByUserId: build.query({
        query: (id) => {
          return `ads/?user_id=${id}`
        },
      }),
      getCommentsById: build.query({
        query: (id) => {
          return `ads/${id}/comments`
        },
      }),
      getRegistration: build.mutation({
        query: (data) => {
          return {
            url: `auth/register`,
            method: 'POST',
            body: data,
          }
        },
      }),
      loginUser: build.mutation({
        query: (data) => {
          return {
            url: `auth/login`,
            method: 'POST',
            body: data,
          }
        },
      }),
      getCredentials: build.query({
        query: () => {
          return {
            url: `user`,
            method: 'GET',
          }
        },
      }),
    }
  },
})

export const {
  useFetchAllArticlesQuery,
  useGetArticlesByUserIdQuery,
  useGetCommentsByIdQuery,
  useGetRegistrationMutation,
  useLoginUserMutation,
  useGetCredentialsQuery,
} = artApi
