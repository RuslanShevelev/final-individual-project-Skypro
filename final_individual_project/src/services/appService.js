import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const artApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => {
    return {
      fetchAllArticles: build.query({
        query: (id) => {
          return {
            url: `ads${id ? `/?user_id=${id}` : ''}`,
          }
        },
      }),
      getArticleById: build.query({
        query: (id) => {
          return `ads/${id}`
        },
      }),
      getCommentsById: build.query({
        query: (id) => {
          return `ads/${id}/comments`
        },
      }),
    }
  },
})

export const {
  useFetchAllArticlesQuery,
  useGetArticleByIdQuery,
  useGetCommentsByIdQuery,
} = artApi
