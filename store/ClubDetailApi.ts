import { ClubDetailType } from '@/type/common'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const clubDetailApi = createApi({
  reducerPath: 'clubDetailApi',
  tagTypes: ['clubDetail'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
  endpoints: (builder) => ({
    getClubDetail: builder.query<ClubDetailType, string>({
      query: (clubId) => `/club/${clubId}`,
      providesTags: (_, __, id) => [{ type: 'clubDetail', id }],
    }),
    setClubDetail: builder.mutation({
      query: ({ clubId, body }) => ({
        url: `/club/${clubId}`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
})

export const { useGetClubDetailQuery, useSetClubDetailMutation } = clubDetailApi
export default clubDetailApi
