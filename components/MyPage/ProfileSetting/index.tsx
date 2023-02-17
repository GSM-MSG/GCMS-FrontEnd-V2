import * as S from './style'
import { useFetch, useUpload } from '@/hooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { ApiType, OnDeleteType } from '@/type/components/MyPage'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'

export default function ProfileSetting() {
  const [apiConfig, setApiConfig] = useState<ApiType>({
    url: '',
    method: 'get',
  })

  const { fetch } = useFetch({
    url: apiConfig.url,
    method: apiConfig.method,
  })
  const { upload } = useUpload()
  const { isLoggned } = useUser()
  const router = useRouter()

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = await e.currentTarget.files?.item(0)

    if (!file) return
    const data = await upload([file])

    if (!data) return
    setApiConfig({
      url: '/user',
      method: 'patch',
      data: { profileImg: data[0] },
    })
  }

  const onDelete = ({ url, method, message }: OnDeleteType) => {
    const confirmCheck = confirm(message)
    if (confirmCheck) setApiConfig({ url: url, method: method })
  }

  useEffect(() => {
    if (apiConfig.url === '') return
    fetch(apiConfig.data)

    if (!isLoggned) router.replace('/')
  }, [apiConfig])

  return (
    <S.Positioner>
      <S.Layer>
        <S.Btn type='file' id='imgUpload' onChange={(e) => onChange(e)} />
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
