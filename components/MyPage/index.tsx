import * as SVG from '@/assets/svg'
import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { setUser } from '@/store/user'
import { ProfileType } from '@/type/common'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SEO from '../SEO'
import ClubItem from './ClubItem'
import ProfileSetting from './ProfileSetting'
import * as S from './style'

export default function MyPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isSetting, setSetting] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const { fetch } = useFetch<ProfileType>({
    method: 'get',
    url: '/user',
    onSuccess: (data) => {
      dispatch(setUser(data))
    },
    onFailure: () => {
      router.replace('/')
    },
  })

  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }))

  const onSubmit = () => {
    fetch()
    setSetting(false)
  }

  useEffect(() => {
    if (user.uuid) return
    fetch()
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.target instanceof Node &&
        modalRef.current &&
        buttonRef.current &&
        !modalRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      )
        setSetting(false)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <SEO title={`GCMS | ${user?.name}`} />
      <S.Positionier>
        <S.Layer>
          <S.ProfileBox>
            <SVG.ProfileIcon />
            <S.ProfileContent>
              <S.ProfileImg>
                {user?.profileImg && (
                  <Image
                    src={user.profileImg}
                    alt='profileImg'
                    width={60}
                    height={60}
                  />
                )}
              </S.ProfileImg>
              <p>{user?.name}님</p>
              <small>
                {user?.grade ?? 0}학년 {user?.classNum ?? 0}반{' '}
                {user?.number ?? 0}번
              </small>
            </S.ProfileContent>
            <S.SettingButton
              onClick={() => setSetting(!isSetting)}
              ref={buttonRef}
            >
              <SVG.KebabMenuIcon />
            </S.SettingButton>
          </S.ProfileBox>
          <S.ContentBox>
            <S.ClubBox>
              <h2>내 동아리</h2>
              <S.ClubContainer>
                <S.ClubType>전공동아리</S.ClubType>
                <ClubItem clubType='MAJOR' data={user} />
              </S.ClubContainer>
              <S.ClubContainer>
                <S.ClubType>자율동아리</S.ClubType>
                <ClubItem clubType='FREEDOM' data={user} />
              </S.ClubContainer>
              <S.ClubContainer>
                <S.ClubType>사설동아리</S.ClubType>
                <ClubItem clubType='EDITORIAL' data={user} />
              </S.ClubContainer>
            </S.ClubBox>
            {isSetting && (
              <div ref={modalRef}>
                <ProfileSetting onSubmit={() => onSubmit()} />
              </div>
            )}
          </S.ContentBox>
        </S.Layer>
      </S.Positionier>
    </>
  )
}
