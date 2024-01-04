import { configureStore } from '@reduxjs/toolkit'
import modalsReducer from './slices/modalsSlice'
import { authReducer } from './slices/authSlice'

import { artApi } from 'services/appService'
// import tracksReducer from './slices/tracksSlice'
// import { authorizedApi } from '../services/appService'

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    auth: authReducer,
    [artApi.reducerPath]: artApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(artApi.middleware)
  },
})
