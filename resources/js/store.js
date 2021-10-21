import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {AuthSlice} from './slices/AuthSlice'
import { userApi } from './services/User'
import {categoryApi} from './services/Category'
export const store = configureStore({
    reducer: {
        user: AuthSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]:categoryApi.reducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: ['user/logout/rejected']
            }
        }).concat([
            userApi.middleware,
            categoryApi.middleware
        ])

})
setupListeners(store.dispatch)
