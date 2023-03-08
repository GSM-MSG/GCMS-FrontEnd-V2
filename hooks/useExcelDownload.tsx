import API from '@/api'
import toastOption from '@/lib/toastOption'
import { ErrorsType } from '@/type/hooks/useFetch'
import { isAxiosError, Method } from 'axios'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
  url: string
  method: Method
  onSuccess?: (data: ArrayBuffer) => void | Promise<void>
  onFailure?: (e: unknown) => void | Promise<void>
  errors?: ErrorsType | string
}

const useExcelDownload = ({
  url,
  method,
  onSuccess,
  onFailure,
  errors,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const download = useCallback(async () => {
    setIsLoading(true)

    try {
      const { data } = await API<ArrayBuffer>({
        url,
        method,
        responseType: 'arraybuffer',
      })

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
    } finally {
      setIsLoading(false)
    }
  }, [url, method, onSuccess, onFailure, errors])

  return { download, isLoading }
}

export default useExcelDownload
