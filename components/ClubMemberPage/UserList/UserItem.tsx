import { useFetch } from '@/hooks'
import { MemberItemProps } from '@/type/components/MemberPage'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './style'

export default function UserItem({ item, scope }: MemberItemProps) {
  const router = useRouter()
  const clubID = router.query.clubID
  const [isSelected, setSelected] = useState<boolean>(false)

  const { fetch: kick } = useFetch({
    url: `/club-member/${clubID}`,
    method: 'post',
    successMessage: '회원 추방에 성공하셨습니다',
  })

  const { fetch: delegate } = useFetch({
    url: `/club-member/${clubID}`,
    method: 'patch',
    successMessage: '부장 위임에 성공하셨습니다',
  })

  const onKick = async (uuid: string) => {
    const isConfirm = confirm(`정말로 회원 추방을 하시겠습니까?`)
    if (isConfirm) await kick({ uuid: uuid })
  }

  const onDelegate = async (uuid: string) => {
    const isConfirm = confirm(`정말로 부장 위임을 하시겠습니까?`)
    if (isConfirm) await delegate({ uuid: uuid })
  }
  return (
    <S.UserWrapper>
      <S.UserBox option={isSelected}>
        <S.UserImgBox>
          {item.profileImg && <S.Img src={item.profileImg} alt='profileImg' />}
        </S.UserImgBox>
        <S.UserInfo>
          <S.UserName>{item.name}</S.UserName>
          <small>
            {item.grade}학년 {item.classNum}반 {item.number}번
          </small>
        </S.UserInfo>
        <S.CheckBox>
          {scope === 'HEAD' && item.scope !== 'HEAD' && (
            <>
              <S.CheckBtn
                id={item.uuid}
                type='checkbox'
                onChange={() => setSelected(!isSelected)}
                checked={isSelected}
              />
              <S.CheckBtnLabel htmlFor={item.uuid}>
                <span />
              </S.CheckBtnLabel>
            </>
          )}
        </S.CheckBox>
      </S.UserBox>
      <S.OptionBox>
        <S.OptionBtn onClick={() => onKick(item.uuid)}>추방</S.OptionBtn>
        <S.OptionBtn onClick={() => onDelegate(item.uuid)}>위임</S.OptionBtn>
      </S.OptionBox>
    </S.UserWrapper>
  )
}
