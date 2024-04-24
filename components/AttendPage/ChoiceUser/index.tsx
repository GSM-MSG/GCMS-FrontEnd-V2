import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { removeUser } from '@/store/applicant'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import {
  Attend_ABSENT,
  Attend_ATTENDED,
  Attend_REASONABLE_ABSENT,
  Attend_LATE,
} from '@/assets/svg'

interface choiceUserProps {
  onSubmit: () => Promise<void>
}

export default function ChoiceUser({ onSubmit }: choiceUserProps) {
  const { applicant } = useSelector((state: RootState) => ({
    applicant: state.applicant,
  }))
  const dispatch = useDispatch()
  const [choice, setChoice] = useState('')
  const [isShow, setIsShow] = useState<boolean>(false)
  const passKorean =
    choice === 'ATTENDED'
      ? '출석'
      : choice === 'LATE'
      ? '지각'
      : choice === 'ABSENT'
      ? '결석'
      : choice === 'REASONABLE_ABSENT'
      ? '병결'
      : ''
  const { fetch: data } = useFetch({
    url: `/attend`,
    method: 'patch',
    onSuccess: onSubmit,
    errors: '출석 상태 변경에 실패했습니다',
    autoPushToggle: false
  })

  const onClick = (choice: string) => {
    setChoice(choice)
    setIsShow(true)
  }

  const onConfirm = () => {
    applicant.forEach(async (item) => {
      await data(
        {
        attendanceId: item.attendanceId,
        attendanceStatus: choice,
      })
    dispatch(removeUser(item.uuid))
    })

    setIsShow(false)
  }

  return (
    <>
      <S.Positioner>
        <S.Layer>
          <S.AttendanceBtn onClick={() => onClick('ATTENDED')}>
            <Attend_ATTENDED />
            출석
          </S.AttendanceBtn>
          <S.TradinessBtn onClick={() => onClick('LATE')}>
            <Attend_LATE />
            지각
          </S.TradinessBtn>
          <S.AbsentBtn onClick={() => onClick('ABSENT')}>
            <Attend_ABSENT />
            결석
          </S.AbsentBtn>
          <S.SickBtn onClick={() => onClick('REASONABLE_ABSENT')}>
            <Attend_REASONABLE_ABSENT />
            병결
          </S.SickBtn>
        </S.Layer>
      </S.Positioner>
      {isShow && (
        <ConfirmModal
          title={`지원자 ${passKorean}`}
          description={`정말 ${passKorean}시키겠습니까?`}
          onClose={() => setIsShow(false)}
          onConfirm={onConfirm}
        />
      )}
    </>
  )
}
