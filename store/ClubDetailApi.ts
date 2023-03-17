import customBaseQuery from '@/lib/customBaseQuery'
import { ClubDetailType } from '@/type/common'
import { createApi } from '@reduxjs/toolkit/query/react'

const clubDetailApi = createApi({
  reducerPath: 'clubDetailApi',
  tagTypes: ['clubDetail'],
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getClubDetail: builder.query<ClubDetailType, string>({
      query: (clubId) => ({ url: `/club/${clubId}` }),
      providesTags: (_, __, id) => [{ type: 'clubDetail', id }],
    }),
    setClubDetail: builder.mutation({
      query: ({ clubId, body }) => ({
        url: `/club/${clubId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_, __, arg) => [{ type: 'clubDetail', id: arg.clubId }],
    }),
  }),
})

export const { useGetClubDetailQuery, useSetClubDetailMutation } = clubDetailApi
export default clubDetailApi
