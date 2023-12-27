import { createSlice } from '@reduxjs/toolkit'
import { artApi } from 'services/appService'

const initialState = {
  currentModal: '',
  allArticles: [],
  userArticles: [],
  currentArt: null,
  comments: [],
}

export const modalSlice = createSlice({
  name: 'modalsReducer',
  initialState,
  reducers: {
    setCurrentModal: (state, action) => {
      state.currentModal = action.payload
    },
    setCurrentArt: (state, action) => {
      state.currentArt = state.allArticles.find((art) => {
        return art.id === action.payload
      })
    },
    getUserArts: (state, action) => {
      state.userArticles = state.allArticles.filter((art) => {
        return art?.user?.id === action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      artApi.endpoints.fetchAllArticles.matchFulfilled,
      (state, { payload }) => {
        state.allArticles = payload
      },
    )
    builder.addMatcher(
      artApi.endpoints.getCommentsById.matchFulfilled,
      (state, { payload }) => {
        state.comments = payload
      },
    )
  },
})

export const { setCurrentModal, setCurrentArt, getUserArts } =
  modalSlice.actions

export default modalSlice.reducer
