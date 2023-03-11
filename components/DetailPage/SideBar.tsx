import Link from 'next/link'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import Switch from '../Common/Switch'
import { useFetch } from '@/hooks'
import { setIsOpened } from '@/store/clubDetail'

export default function SideBar() {
  const dispatch = useDispatch()
  const { clubDetail, user } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
    user: state.user,
  }))

  const { fetch, isLoading } = useFetch({
    method: 'patch',
    url: `/club/${clubDetail.id}/${clubDetail.isOpened ? 'close' : 'open'}`,
    errors: '동아리 열기/닫기에 실패했습니다',
    onSuccess: () => {
      dispatch(setIsOpened())
    },
  })

  const onClick = () => !isLoading && fetch()

  return (
    <S.SideBar>
      <S.SideTopContent>
        <S.ClubTitle>{clubDetail.name}</S.ClubTitle>
        <S.ClubControls>
          <S.ClubControl>
            <Switch
              toggle={clubDetail.isOpened}
              disabled={
                !(clubDetail.scope === 'HEAD' || user.role === 'ROLE_ADMIN')
              }
              onClick={onClick}
            />
            <S.ClubControlTitle>동아리 모집</S.ClubControlTitle>
          </S.ClubControl>

          <S.ClubControl>
            <Link href={`/applicant/${clubDetail.id}`}>
              <SVG.GearIcon />
              <S.ClubControlTitle>설정</S.ClubControlTitle>
            </Link>
          </S.ClubControl>
        </S.ClubControls>
      </S.SideTopContent>

      <S.SideControl>
        <S.NotionInfo>
          <p>{clubDetail.name}이/가 더 궁금하다면?</p>
          <Link href={`${clubDetail.notionLink}`}>
            노션 보러가기
            <i>
              <SVG.ShortcutsIcon />
            </i>
          </Link>
        </S.NotionInfo>
      </S.SideControl>
    </S.SideBar>
  )
}
