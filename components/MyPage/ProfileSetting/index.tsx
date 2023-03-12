import * as S from './style'
import { useFetch, useUpload } from '@/hooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { ApiType, OnDeleteType } from '@/type/components/MyPage'
import { useLoggedIn } from '@/hooks'
import { useRouter } from 'next/router'
import TokenManager from '@/api/TokenManager'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/store/user'

interface profileSetingProps {
  onSubmit: () => void
}

export default function ProfileSetting({ onSubmit }: profileSetingProps) {
  const { upload } = useUpload()
  const { isLoggned } = useLoggedIn({})
  const router = useRouter()
  const dispatch = useDispatch()

  const [apiConfig, setApiConfig] = useState<ApiType>({
    url: '',
    method: 'get',
  })

  const { fetch: Delete } = useFetch({
    url: apiConfig.url,
    method: apiConfig.method,
    onSuccess: () => {
      const tokenManager = new TokenManager()
      tokenManager.removeTokens()
      dispatch(removeUser())
      router.push('/')
    },
  })

  const { fetch: imgData } = useFetch({
    url: '/user',
    method: 'patch',
    onSuccess: onSubmit,
  })

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.item(0)

    if (!file) return
    const data = await upload([file])

    if (!data) return
    imgData({
      profileImg: data[0],
    })
  }

  const onDelete = ({ url, method, message }: OnDeleteType) => {
    const confirmCheck = confirm(message)
    if (confirmCheck) setApiConfig({ url: url, method: method })
  }

  useEffect(() => {
    ;(async () => {
      if (apiConfig.url === '') return
      await Delete()

      if (!isLoggned) router.replace('/')
    })()
  }, [apiConfig])

  return (
    <S.Positioner>
      <S.Layer>
        <S.Btn
          type='file'
          accept='image/*'
          id='imgUpload'
          onChange={(e) => onChange(e)}
        />
        <label htmlFor='imgUpload'>이미지 변경</label>
        <S.Btn
          type='button'
          value='로그아웃'
          onClick={() =>
            onDelete({
              url: '/auth',
              method: 'delete',
              message: '정말로 로그아웃을 하시겠습니까?',
            })
          }
        />
        <S.Btn
          type='button'
          value='서비스 탈퇴'
          onClick={() =>
            onDelete({
              url: '/user',
              method: 'delete',
              message: '정말로 회원 탈퇴를 하시겠습니까?',
            })
          }
        />
      </S.Layer>
    </S.Positioner>
  )
}
