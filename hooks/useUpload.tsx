import API from '@/api'
import toastOption from '@/lib/toastOption'
import { ImageUploadResType } from '@/type/hooks/useUpload'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const useUpload = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const upload = useCallback(async (file: File[]) => {
    setIsLoading(true)

    const formData = new FormData()
    file.forEach((f) => {
      formData.append('file', f)
    })

    try {
      const { data } = await API.post<ImageUploadResType>('/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setIsLoading(false)

      toast.success('이미지 업로드에 성공했습니다.', toastOption)
      return data.images
    } catch (e) {
      toast.error('이미지 업로드에 실패했습니다.', toastOption)
      setIsLoading(false)
    }
  }, [])

  return { upload, isLoading }
}

export default useUpload
