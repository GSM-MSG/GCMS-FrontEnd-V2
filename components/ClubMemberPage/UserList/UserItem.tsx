import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { showModal } from '@/store/confirmModal'
import ConfirmStateType from '@/type/common/ConfirmStateType'
import { MemberItemProps } from '@/type/components/MemberPage'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'

export default function UserItem({ item, scope }: MemberItemProps) {
  const router = useRouter()
  const clubID = router.query.clubID
  const dispatch = useDispatch()
  const [isSelected, setSelected] = useState<boolean>(false)
  const [uuid, setUuid] = useState<string>('')
  const [confirmState, setConfirmState] = useState<ConfirmStateType>({
    title: '',
    description: '',
  })

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

  const onClick = (title: string, description: string, uuid: string) => {
    setConfirmState({
      title,
      description,
    })
    setUuid(uuid)
    dispatch(showModal())
  }

  const onConfirm = () => {
    if (confirmState.title === '회원 추방') kick({ uuid })
    else delegate({ uuid })
  }

  return (
    <>
      <S.UserWrapper>
        <S.UserBox option={isSelected}>
          <S.UserImgBox>
            {item.profileImg && (
              <S.Img src={item.profileImg} alt='profileImg' />
            )}
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
          <S.OptionBtn
            onClick={() =>
              onClick(
                '회원 추방',
                '정말로 회원 추방을 하시겠습니까?',
                item.uuid
              )
            }
          >
            추방
          </S.OptionBtn>
          <S.OptionBtn
            onClick={() =>
              onClick(
                '부장 위임',
                '정말로 부장 위임을 하시겠습니까?',
                item.uuid
              )
            }
          >
            위임
          </S.OptionBtn>
        </S.OptionBox>
      </S.UserWrapper>
      <ConfirmModal
        title={confirmState.title}
        description={confirmState.description}
        onConfirm={onConfirm}
      />
    </>
  )
}
