import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import i18n from "i18next"

const baseUrl = 'http://deschide.local/api'
const headers = {
    Authorization: 'Bearer '+ localStorage.getItem('token')
}

const createRequest = (url) =>({url,headers})

export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getAllCategories: builder.query({
            query: (lng)=>createRequest(`${lng}/category`)
        })
    })
})

export const {useGetAllCategoriesQuery} = categoryApi
