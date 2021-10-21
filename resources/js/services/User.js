import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://deschide.local/api'
const userHeaders = {
    Authorization: 'Bearer '+ localStorage.getItem('token')
}

const createRequest = (url)=>({url,headers: userHeaders})

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getLoggedUser: builder.query({
            query: ()=> createRequest(`loggedUser`)
        })
    })
})

export const { useGetLoggedUserQuery } = userApi
