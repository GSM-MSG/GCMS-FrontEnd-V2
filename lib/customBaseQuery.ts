import API from '@/api'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { AxiosError, isAxiosError } from 'axios'

const customBaseQuery: BaseQueryFn<
  FetchArgs,
  unknown,
  AxiosError | string,
  any,
  FetchBaseQueryMeta
> = async (args) => {
  try {
    const res = await API({
      method: args.method,
      url: args.url,
      data: args.body,
    })

    return { data: res.data }
  } catch (error) {
    if (!isAxiosError(error)) return { error: String(error) }
    return { error }
  }
}

export default customBaseQuery
