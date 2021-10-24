import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = process.env.MIX_APP_URL + 'api/'
const headers = {
    Authorization: 'Bearer '+ localStorage.getItem('token')
}

const createRequest = (url) =>({url,headers})

export const adminCategoryApi = createApi({
  reducerPath: 'adminCategoryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Category','Article'],
  endpoints: (build) => ({
    getCategories: build.query({
      query: (lng) => createRequest(`${lng}/category`),
      // Provides a list of `Posts` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
          [
            ...result.map(({ id }) => ({ type: 'Category', id })),
            { type: 'Category', id: 'LIST' },
          ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
          [{ type: 'Category', id: 'LIST' }],
    }),
    getCategory: build.query({
      query: ({lng,category})=>createRequest(`${lng}/category/${category}`),
      providesTags: (result, error, id) => [{type: 'Category'}]
    }),
    getCategoryArticles: build.query({
      //"http://deschide.local/api/ru/category/1/articles?page=1"
      query: ({lng,category, page = 1})=>createRequest(`${lng}/category/${category}/articles?page=${page}`),
      providesTags: (result)=>result
        ?
        [
          result.data.map(({id})=>({type: 'Article',id}))
        ]
        :
        [{type: 'Article',id:'LIST'}]
    }),
    addCategory: build.mutation({
      query(data) {
        const {lng,...body} = data
        return {
          url: `${lng}/category/add`,
          method: 'POST',
          headers,
          body,
        }
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: 'Category', id: 'LIST' }]
    }),
    updateCategory: build.mutation({
      query(data) {
        const { id, lng, ...body } = data
        return {
          url: `${lng}/category/${id}/update`,
          method: 'PATCH',
          headers,
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Category', id }],
    }),
    deleteCategory: build.mutation({
      query({lng,id}) {
        return {
          url: `${lng}/category/${id}/delete`,
          method: 'DELETE',
          headers
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: [{type: 'Category'}]
    }),
    addArticleByCategory: build.mutation({
      query(data){
        const {category, lng, ...body} = data
        return {
          url: `${lng}/category/${category}/add-article`,
          method: "POST",
          headers,
          body
        }
      }
    })
  }),
})

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useGetCategoryArticlesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useAddArticleByCategoryMutation,
} = adminCategoryApi
