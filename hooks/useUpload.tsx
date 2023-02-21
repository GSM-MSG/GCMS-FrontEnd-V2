import API from '@/api'
import { ImageUploadResType } from '@/type/hooks/useUpload'
import { useCallback, useState } from 'react'
const NODE_ENV = process.env.NODE_ENV

const useUpload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const upload = useCallback(async (file: File[]) => {
    setIsLoading(true)

    const formData = new FormData()
    file.forEach((f) => {
      formData.append('file', f)
    })

    if (NODE_ENV === 'development') {
      setIsLoading(false)
      return {
        images: [...Array(5)].map(() => 'https://bit.ly/3YUgIDd'),
      }
    }

    try {
      const { data } = await API.post<ImageUploadResType>('/image', formData, {
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
