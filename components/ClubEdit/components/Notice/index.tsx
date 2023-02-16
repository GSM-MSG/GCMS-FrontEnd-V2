import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import ClubDetailType from '@/type/common/ClubDetailType'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './style'
import Switch from './Switch'

interface Props {
  data: ClubDetailType | null
}

const Notice = ({ data }: Props) => {
  const router = useRouter()
  const [isOpened, setIsOpened] = useState<boolean | undefined>(data?.isOpened)
  const [isShow, setIsShow] = useState<boolean>(false)
  const { fetch: clubOpenClose, isLoading: isOpenCloseFetching } = useFetch({
    method: 'patch',
    url: `/club/${data?.id}/${data?.isOpened ? 'close' : 'open'}`,
    onSuccess: () => {
      setIsOpened(!isOpened)
    },
  })
  const { fetch: deleteClub, isLoading: isDeleteFetching } = useFetch({
    method: 'delete',
    url: `/club/${data?.id}`,
    onSuccess: () => {
      router.push('/')
    },
  })

  useEffect(() => {
    setIsOpened(data?.isOpened)
  }, [data?.isOpened])

  const onReady = async (query: () => Promise<void>) => {
    if (isDeleteFetching || isOpenCloseFetching) return
    query()
  }

  return (
    <>
      <S.Wrapper>
        <S.Label>공고</S.Label>
        <S.Content>
          <S.Left src={data?.bannerImg} />

          <S.Right>
            <S.Title>{data?.name}</S.Title>
            <S.Description>{data?.content}</S.Description>
            <S.UtilContent>
              <S.UtilSection>
                <S.Title>동아리 모집</S.Title>

                <Switch
                  isOpened={isOpened}
                  scope={data?.scope}
                  onClick={() => onReady(clubOpenClose)}
                />
              </S.UtilSection>

              <S.UtilSection>
                <S.Title>동아리 삭제</S.Title>
                <S.DeleteBtn onClick={() => setIsShow(true)}>삭제</S.DeleteBtn>
              </S.UtilSection>
            </S.UtilContent>
          </S.Right>
        </S.Content>
      </S.Wrapper>

      {isShow && (
        <ConfirmModal
          title='동아리 삭제하기'
          description={`${data?.name}동아리를 정말로 삭제하시겠습니까?`}
          onClose={() => setIsShow(false)}
          onConfirm={() => onReady(deleteClub)}
        />
      )}
    </>
  )
}

export default Notice
