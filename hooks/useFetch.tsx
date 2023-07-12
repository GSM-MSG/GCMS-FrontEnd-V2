import API from '@/api'
import toastOption from '@/lib/toastOption'
import { ErrorsType } from '@/type/hooks/useFetch'
import { isAxiosError, Method } from 'axios'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

interface Props<T> {
  url: string
  method: Method
  onSuccess?: (data: T) => void | Promise<void>
  onFailure?: (e: unknown) => void | Promise<void>
  successMessage?: string
  errors?: ErrorsType | string
  autoPushToggle?: boolean
}

const useFetch = <T,>({
  url,
  method,
  onSuccess,
  onFailure,
  successMessage,
  errors,
  autoPushToggle = true,
}: Props<T>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<T | null>(null)
  const router = useRouter()

  const fetch = useCallback(
    async (body?: any) => {
      setIsLoading(true)

      try {
        const { data } = await API({
          url,
          method,
          data: body,
        })

        if (successMessage) toast.success(successMessage, toastOption)

        setData(data)
        if (onSuccess) await onSuccess(data)
      } catch (e) {
        if (!isAxiosError(e)) {
          toast.error('알 수 없는 에러가 발생했습니다')
          return
        }

        if (e.response && e.response.status >= 500) {
          toast.error('알 수 없는 에러가 발생했습니다', toastOption)
        } else if (typeof errors === 'string') {
          toast.error(errors, toastOption)
        } else if (errors && e.response && errors[e.response.status]) {
          toast.error(errors[e.response.status], toastOption)
        }
        if (onFailure) await onFailure(e)

        if (autoPushToggle) router.push('/')
      } finally {
        setIsLoading(false)
      }
    },
    [url, method, onSuccess, onFailure, successMessage, errors]
  )

  return { fetch, isLoading, data }
}

export default useFetch
