import { createSlice } from '@reduxjs/toolkit'
import { artApi } from 'services/appService'

const initialState = {
  currentPage: 'Main',
  currentModal: '',
  loading: false,
  allArticles: [],
  displayArticles: [],
  userArticles: [],
  currentArt: null,
  comments: [],
}

export const modalSlice = createSlice({
  name: 'modalsReducer',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setCurrentModal: (state, action) => {
      state.currentModal = action.payload
    },
    setCurrentArt: (state, action) => {
      state.currentArt = state?.allArticles?.find(
        (art) => art.id === action.payload,
      )
    },
    getUserArts: (state, action) => {
      state.userArticles = state.allArticles.filter(
        (art) => art?.user?.id === action.payload,
      )
    },
    findArticles: (state, action) => {
      state.displayArticles =
        action.payload === 'clear'
          ? state.allArticles
          : state.allArticles.filter((art) =>
              art.title
                .toLocaleLowerCase()
                .includes(action.payload.toLocaleLowerCase()),
            )
    },
    setComments: (state, { payload }) => {
      state.comments = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      artApi.endpoints.fetchAllArticles.matchPending,
      (state) => {
        state.loading = true
      },
    )
    builder.addMatcher(
      artApi.endpoints.fetchAllArticles.matchFulfilled,
      (state, { payload }) => {
        state.loading = false
        state.allArticles = payload
        state.displayArticles = payload
      },
    )
    // builder.addMatcher(
    //   artApi.endpoints.getCommentsById.matchFulfilled,
    //   (state, { payload }) => {
    //     state.comments = payload
    //   },
    // )
  },
})

export const {
  setCurrentPage,
  setCurrentModal,
  setCurrentArt,
  getUserArts,
  findArticles,
  setComments,
} = modalSlice.actions

export default modalSlice.reducer
