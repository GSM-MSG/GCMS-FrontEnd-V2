import { useFetch } from '@/hooks'
import ClubDetailType from '@/type/common/ClubDetailType'
import { useRouter } from 'next/router'
import * as S from './style'

interface Props {
  data: ClubDetailType | null
}

const Notice = ({ data }: Props) => {
  const router = useRouter()
  const { fetch: clubOpenClose } = useFetch({
    method: 'patch',
    url: `/club/${data?.id}/${data?.isOpened ? 'close' : 'open'}`,
  })
  const { fetch: deleteClub } = useFetch({
    method: 'delete',
    url: `/club/${data?.id}`,
    onSuccess: () => {
      router.push('/')
    },
  })

  return (
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

              <S.SwitchInput
                id='switch'
                defaultChecked={data?.isOpened}
                type='checkbox'
                onClick={() => clubOpenClose()}
              />
              <S.Switch htmlFor='switch'>
                <span>off</span>
                <S.SwitchBtn />
                <span>on</span>
              </S.Switch>
            </S.UtilSection>

            <S.UtilSection>
              <S.Title>동아리 삭제</S.Title>
              <S.DeleteBtn onClick={() => deleteClub()}>삭제</S.DeleteBtn>
            </S.UtilSection>
          </S.UtilContent>
        </S.Right>
      </S.Content>
    </S.Wrapper>
  )
}

export default Notice
