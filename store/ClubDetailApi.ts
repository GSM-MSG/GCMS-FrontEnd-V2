import { ClubDetailType } from '@/type/common'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const clubDetailApi = createApi({
  reducerPath: 'clubDetailApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
  endpoints: (builder) => ({
    getClubDetail: builder.query<ClubDetailType, string>({
      query: (clubId: string) => `/club/${clubId}`,
    }),
  }),
})

export const { useGetClubDetailQuery } = clubDetailApi
export default clubDetailApi
