import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { removeMember } from '@/store/clubCreation'
import { addMember } from '@/store/member'
import { ClubMemberType } from '@/type/common/MemberListType'
import { MemberItemProps } from '@/type/components/MemberPage'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'

export default function UserItem({ item, scope }: MemberItemProps) {
  const { member } = useSelector((state: RootState) => ({
    member: state.member,
  }))
  const dispatch = useDispatch()
  const router = useRouter()

  const { fetch: kick } = useFetch({
    url: `/club-member/${router.query.clubID}`,
    method: 'post',
  })

  const { fetch: delegate } = useFetch({
    url: `/club-member/${router.query.clubID}`,
    method: 'patch',
  })

  const onChange = (item: ClubMemberType) => {
    if (member.find((seleted) => seleted.uuid === item.uuid)) {
      dispatch(removeMember(item.uuid))
      return
    }
    dispatch(addMember(item))
  }

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
      <S.UserBox option={!!member.find((i) => i.uuid === item.uuid)}>
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
          {scope === 'HEAD' && (
            <>
              <S.CheckBtn
                id={item.uuid}
                type='checkbox'
                onChange={() => onChange(item)}
                checked={!!member.find((i) => i.uuid === item.uuid)}
              />
              <S.CheckBtnLabel htmlFor={item.uuid}>
                <span />
              </S.CheckBtnLabel>
            </>
          )}
        </S.CheckBox>
      </S.UserBox>
      {!!member.find((i) => i.uuid === item.uuid) && (
        <S.OptionBox>
          <S.OptionBtn onClick={() => onKick(item.uuid)}>추방</S.OptionBtn>
          <S.OptionBtn onClick={() => onDelegate(item.uuid)}>위임</S.OptionBtn>
        </S.OptionBox>
      )}
    </S.UserWrapper>
  )
}
