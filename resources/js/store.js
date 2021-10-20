import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {AuthSlice} from './slices/AuthSlice'
import { userApi } from './services/User'

export const store = configureStore({
    reducer: {
        user: AuthSlice.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: ['user/logout/rejected']
            }
        }).concat(userApi.middleware)
})
setupListeners(store.dispatch)
