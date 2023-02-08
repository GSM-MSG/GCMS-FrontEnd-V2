import API from '@/api'
import { useCallback, useState } from 'react'

const useUpload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const upload = useCallback(async (file: File): Promise<boolean> => {
    if (!file.type.includes('image')) return false
    setIsLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      await API.post('/image', formData)
      setIsLoading(false)
      return true
    } catch (e) {
      setIsLoading(false)
      return false
    }
  }, [])

  return { upload, isLoading }
}

export default useUpload
