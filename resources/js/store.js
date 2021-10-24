import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {AuthSlice} from './slices/AuthSlice'
import { userApi } from './services/User'
import {adminCategoryApi} from './services/Category'
import {ArticleApi} from './services/Article'

export const store = configureStore({
  reducer: {
    user: AuthSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [adminCategoryApi.reducerPath]:adminCategoryApi.reducer,
    [ArticleApi.reducerPath]: ArticleApi.reducer
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: ['user/logout/rejected']
      }
      }).concat([
        userApi.middleware,
        adminCategoryApi.middleware,
        ArticleApi.middleware
      ])
})
setupListeners(store.dispatch)
