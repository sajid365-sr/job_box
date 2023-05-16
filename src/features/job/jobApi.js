
import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    getJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["Jobs"],
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
        }),
        providesTags: ["singleJob"],
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
    apply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
    question: builder.mutation({
      query: (data) => ({
        url: "/query",
        method: "PATCH",
        body: data,
        }),
        invalidatesTags: ["singleJob"],
      
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "/reply",
        method: "PATCH",
        body: data,
        }),
        invalidatesTags: ["singleJob"],
      
    }),
  }),
});

export const { usePostJobMutation, useGetJobsQuery, useJobByIdQuery, useApplyMutation, useGetAppliedJobsQuery, useQuestionMutation, useReplyMutation } = jobApi;