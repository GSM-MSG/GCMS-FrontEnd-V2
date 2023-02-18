import API from '@/api'
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
      return [...Array(5)].map(
        () =>
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png'
      )
    }

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
