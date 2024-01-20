import { createSlice } from '@reduxjs/toolkit'
import { artApi } from 'services/appService'

const AUTH_KEY = 'tokens'

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY))
  } catch (error) {
    console.error(error)
    return null
  }
}
const tokens = getAuthFromLocalStorage()

const initialState = {
  isAuth: tokens?.isAuth ?? false,
  access: tokens?.access ?? '',
  refresh: tokens?.refresh ?? '',
  id: tokens?.id ?? null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action) {
      const payload = action.payload ?? initialState
      state.access = payload.access
      state.refresh = payload.refresh
      localStorage.setItem(AUTH_KEY, JSON.stringify(state))
    },
    logout(state) {
      state.isAuth = false
      state.access = ''
      state.refresh = ''
      state.id = null
      localStorage.removeItem(AUTH_KEY)
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      artApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.isAuth = true
        state.access = payload.access_token
        state.refresh = payload.refresh_token
        localStorage.setItem(AUTH_KEY, JSON.stringify(state))
      },
    )
    builder.addMatcher(
      artApi.endpoints.getCredentials.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id
        localStorage.setItem(AUTH_KEY, JSON.stringify(state))
      },
    )
  },
})
export const { logout, setTokens } = authSlice.actions
export const authReducer = authSlice.reducer
