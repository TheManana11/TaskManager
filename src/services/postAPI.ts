
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post, CreatePostForm } from '../types/posts';

export const postsApi = createApi({
  reducerPath: "postsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  tagTypes: ["Posts"],

  endpoints: (builder) => ({
    getPosts: builder.query<Post[], number>({
      query: (userID) => `posts?userId=${userID}`,
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation<Post, CreatePostForm>({
        query: (newPost) => {
            return {
                url: 'posts',
                method: 'POST',
                body: newPost
            }
        },
        invalidatesTags: ["Posts"],
    })
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
