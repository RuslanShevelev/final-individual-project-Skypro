import { configureStore } from '@reduxjs/toolkit'
import modalsReducer from './slices/modalsSlice'
import { authReducer } from './slices/authSlice'
import { artApi } from 'services/appService'

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
    [artApi.reducerPath]: artApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artApi.middleware),
})
