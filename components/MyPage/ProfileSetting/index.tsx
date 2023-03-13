import * as S from './style'
import { useFetch, useUpload } from '@/hooks'
import { ChangeEvent, useState } from 'react'
import { OnDeleteType } from '@/type/components/MyPage'
import { useLoggedIn } from '@/hooks'
import { useRouter } from 'next/router'
import TokenManager from '@/api/TokenManager'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/store/user'
import ConfirmModal from '@/components/Common/ConfirmModal'

interface profileSetingProps {
  onSubmit: () => void
}

export default function ProfileSetting({ onSubmit }: profileSetingProps) {
  const { upload } = useUpload()
  const { isLoggned } = useLoggedIn({})
  const [isShow, setIsShow] = useState<boolean>(false)
  const [queryState, setQueryState] = useState<OnDeleteType>({
    title: '',
    message: '',
    url: '',
    method: 'get',
  })
  const router = useRouter()
  const dispatch = useDispatch()

  const { fetch: deleteQuery } = useFetch({
    url: queryState.url,
    method: queryState.method,
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

  const onDelete = ({ url, method, title, message }: OnDeleteType) => {
    setQueryState({
      url,
      method,
      title,
      message,
    })
    setIsShow(true)
  }

  const onConfirm = () => {
    if (!isLoggned) return
    deleteQuery()
  }

  return (
    <>
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
                title: '로그아웃',
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
                title: '서비스 탈퇴',
                message: '정말로 회원 탈퇴를 하시겠습니까?',
              })
            }
          />
        </S.Layer>
      </S.Positioner>
      {isShow && (
        <ConfirmModal
          title={queryState.title}
          description={queryState.message}
          onConfirm={onConfirm}
          onClose={() => setIsShow(false)}
        />
      )}
    </>
  )
}
