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
  // name: '',
  // email: '',
  // city: '',
  // avatar: '',
  // sells_from: '',
  // phone: '',
  // role: '',
  // surname: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setAuth(state, action) {
    //   const payload = action.payload ?? initialState
    //   state.isAuth = payload.isAuth
    //   state.access = payload.access
    //   state.refresh = payload.refresh
    //   if (action.payload) {
    //     localStorage.setItem(
    //       AUTH_KEY,
    //       JSON.stringify({
    //         isAuth: state.isAuth,
    //         access: state.access,
    //         refresh: state.refresh,
    //       }),
    //     )
    //   } else {
    //     localStorage.removeItem(AUTH_KEY)
    //     state = initialState
    //   }
    // },
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
    // builder.addMatcher(
    //   artApi.endpoints.changeCredentials.matchFulfilled,
    //   (state, { payload }) => {
    //     state.name = payload.name
    //     state.city = payload.city
    //     state.phone = payload.phone
    //     state.surname = payload.surname
    //   },
    // )
    // builder.addMatcher(
    //   artApi.endpoints.uploadAvatar.matchFulfilled,
    //   (state, { payload }) => {
    //     state.avatar = payload.avatar
    //   },
    // )
  },
})
export const { logout, setTokens } = authSlice.actions
export const authReducer = authSlice.reducer
