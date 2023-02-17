import * as S from './style'
import { useFetch, useUpload } from '@/hooks'
import { ChangeEvent } from 'react'

export default function ProfileSetting() {
  const { fetch } = useFetch({
    url: '/user',
    method: 'patch',
  })
  const { upload } = useUpload()

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.item(0)
    if (!file) return
    const data = await upload([file])
    if (!data) return
    await fetch({ profileImg: data[0] })
  }

  return (
    <S.Positioner>
      <S.Layer>
        <S.Btn type='file' id='imgUpload' onChange={(e) => onChange(e)} />
        <label htmlFor='imgUpload'>이미지 변경</label>
        <S.Btn type='button' value='로그아웃' />
        <S.Btn type='button' value='서비스 탈퇴' />
      </S.Layer>
    </S.Positioner>
  )
}
