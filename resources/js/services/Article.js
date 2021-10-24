// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.MIX_APP_URL + 'api/'
const headers = {
  Authorization: 'Bearer '+ localStorage.getItem('token')
}

const createRequest = (url) =>({url,headers})

export const ArticleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Article'],
  endpoints: (build) => ({
    getArticles: build.query({
      query: (lng) => createRequest(`${lng}/article`),
      // Provides a list of `Articles` by `id`.
      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
          [
            ...result.map(({ id }) => ({ type: 'Article', id })),
            { type: 'Article', id: 'LIST' },
          ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
          [{ type: 'Article', id: 'LIST' }],
    }),
    addArticle: build.mutation({
      query(data) {
        const {lng,...body} = data
        return {
          url: `${lng}/article/add`,
          method: 'POST',
          headers,
          body,
        }
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: 'Article', id: 'LIST' }],
    }),
    getArticle: build.query({
      query: ({lng,article}) => createRequest(`${lng}/article/${article}`),
      providesTags: (result, error, id) => [{ type: 'Article', id }],
    }),
    updateArticle: build.mutation({
      query(data) {
        const {lng, article, ...body } = data
        return {
          url: `${lng}/article/${article}/update`,
          method: 'PATCH',
          headers,
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Article', id }],
    }),
    deleteArticle: build.mutation({
      query({lng,id}) {
        return {
          url: `${lng}/article/${id}/delete`,
          method: 'DELETE',
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      invalidatesTags: (result, error, id) => [{ type: 'Article', id }],
    }),
  }),
})

export const {
  useGetArticlesQuery,
  useAddArticleMutation,
  useGetArticleQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = ArticleApi
