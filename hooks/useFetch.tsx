import API from '@/api'
import { Method } from 'axios'
import { useCallback, useState } from 'react'

interface Props<T> {
  url: string
  method: Method
  onSuccess?: (data: T) => void | Promise<void>
  onFailure?: (e: unknown) => void | Promise<void>
}

const useFetch = <T,>({ url, method, onSuccess, onFailure }: Props<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)

  const fetch = useCallback(
    async (body?: T) => {
      setIsLoading(true)

      try {
        const { data } = await API({
          url,
          method,
          data: body,
        })

        setData(data)
        if (onSuccess) await onSuccess(data)
      } catch (e) {
        if (onFailure) await onFailure(e)
      } finally {
        setIsLoading(false)
      }
    },
    [url, method, onSuccess, onFailure]
  )

  return { fetch, isLoading, data }
}

export default useFetch
