import { createSlice } from '@reduxjs/toolkit'
import { artApi } from 'services/appService'

const AUTH_KEY = 'credentials'

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY))
  } catch (error) {
    console.error(error)
    return null
  }
}

const initialState = {
  isAuth: false,
  id: '',
  name: '',
  email: '',
  city: '',
  avatar: '',
  sells_from: '',
  phone: '',
  role: '',
  surname: '',
  access: '',
  refresh: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: getAuthFromLocalStorage() ?? initialState,
  reducers: {
    setAuth(state, action) {
      const payload = action.payload ?? initialState
      state.isAuth = payload.isAuth
      state.id = payload.id
      state.name = payload.name
      state.email = payload.email
      state.city = payload.city
      state.avatar = payload.avatar
      state.sells_from = payload.sells_from
      state.phone = payload.phone
      state.role = payload.role
      state.surname = payload.surname
      state.access = payload.access
      state.refresh = payload.refresh
      if (action.payload) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(state))
      } else {
        localStorage.removeItem(AUTH_KEY)
      }
    },
    setTokens(state, action) {
      const payload = action.payload ?? initialState
      state.access = payload.access
      state.refresh = payload.refresh
      localStorage.setItem(AUTH_KEY, JSON.stringify(state))
    },
    // logout(state, action) {
    //   state = initialState
    //   localStorage.removeItem(AUTH_KEY)
    // },
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
        state.isAuth = true
        state.id = payload.id
        state.name = payload.name
        state.email = payload.email
        state.city = payload.city
        state.avatar = payload.avatar
        state.sells_from = payload.sells_from
        state.phone = payload.phone
        state.role = payload.role
        state.surname = payload.surname
        localStorage.setItem(AUTH_KEY, JSON.stringify(state))
      },
    )
  },
})
export const { setAuth, setTokens } = authSlice.actions
export const authReducer = authSlice.reducer
