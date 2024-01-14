import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout, setTokens } from '../store/slices/authSlice'

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
      // console.log(refreshResult)
      api.dispatch(
        setTokens({
          access: refreshResult.data.access_token,
          refresh: refreshResult.data.refresh_token,
        }),
      )
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}

export const artApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Cred', 'Comments', 'Articles'],

  endpoints: (build) => ({
    fetchAllArticles: build.query({
      query: () => ({
        url: `ads`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Articles', id })),
              { type: 'Articles', id: 'LIST' },
            ]
          : [{ type: 'Articles', id: 'LIST' }],
    }),

    postArticle: build.mutation({
      query: ({ data, images }) => {
        const img = new FormData()
        images.forEach((image) => {
          img.append(`files`, image)
        })
        return {
          url: `ads/?title=${data?.title}&&description=${data?.description}&&price=${data?.price}`,
          method: 'POST',
          body: img,
        }
      },
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),

    deleteArticle: build.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),
    postIext: build.mutation({
      query: (body) => ({
        url: `adstext`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),

    postImage: build.mutation({
      query: (data) => ({
        url: `ads/17/image`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),

    uploadAvatar: build.mutation({
      query: (file) => ({
        url: `user/avatar`,
        method: 'POST',
        body: file,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Cred', id }],
    }),

    getArticlesByUserId: build.query({
      query: (id) => `ads/?user_id=${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Articles', id })),
              { type: 'Articles', id: 'LIST' },
            ]
          : [{ type: 'Articles', id: 'LIST' }],
    }),

    getCommentsById: build.query({
      query: (id) => `ads/${id}/comments`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comments', id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    postComment: build.mutation({
      query: (data) => ({
        url: `ads/${data.id}/comments`,
        method: 'POST',
        body: data.body,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
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
      providesTags: (result, error, id) => [{ type: 'Cred', id }],
    }),
    changeCredentials: build.mutation({
      query: (data) => ({
        url: `user`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Cred'],
    }),
  }),
})

export const {
  useFetchAllArticlesQuery,
  usePostArticleMutation,
  usePostIextMutation,
  useDeleteArticleMutation,
  useGetArticlesByUserIdQuery,
  useGetCommentsByIdQuery,
  usePostCommentMutation,
  useGetRegistrationMutation,
  useLoginUserMutation,
  useGetCredentialsQuery,
  useUploadAvatarMutation,
  usePostImageMutation,
  useChangeCredentialsMutation,
} = artApi
