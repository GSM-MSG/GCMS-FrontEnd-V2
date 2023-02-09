import API from '@/api'
import { useCallback, useState } from 'react'

const useUpload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const upload = useCallback(async (file: File[]) => {
    setIsLoading(true)

    const formData = new FormData()
    file.forEach((f) => {
      formData.append('file', f)
    })

    try {
      const { data } = await API.post<string[]>('/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setIsLoading(false)
      return data
    } catch (e) {
      setIsLoading(false)
    }
  }, [])

  return { upload, isLoading }
}

export default useUpload
