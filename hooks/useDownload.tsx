import API from '@/api'
import toastOption from '@/lib/toastOption'
import { ErrorsType } from '@/type/hooks/useFetch'
import { Method } from 'axios'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { saveAs } from 'file-saver'
import { FileTypes } from '@/lib/DocumentFileTypes'

interface Props {
  url: string
  method: Method
  fileName: string
  fileType: string
  onSuccess?: (data: ArrayBuffer) => void | Promise<void>
  onFailure?: (e: unknown) => void | Promise<void>
  errors?: ErrorsType | string
}

const useDownload = ({
  url,
  method,
  fileName,
  fileType,
  onSuccess,
  onFailure,
  errors,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetch = useCallback(async () => {
    if (isLoading) return
    setIsLoading(true)

    try {
      const { data } = await API<ArrayBuffer>({
        url,
        method,
        responseType: 'blob',
      })

      const blob = new Blob([data], {
        type: FileTypes[fileType],
      })

      saveAs(blob, `${fileName}.${fileType}`)
    } catch (e) {
      toast.error('알 수 없는 에러가 발생했습니다', toastOption)

      if (onFailure) await onFailure(e)
    } finally {
      setIsLoading(false)
    }
  }, [url, method, onSuccess, onFailure, errors])

  return { fetch, isLoading }
}

export default useDownload
