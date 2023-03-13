import ConfirmModal from '@/components/Common/ConfirmModal'
import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { removeUser } from '@/store/applicant'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'

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
  const router = useRouter()
  const { fetch: data } = useFetch({
    url: `/applicant/${router.query.clubID}/${choice}`,
    method: 'post',
    onSuccess: onSubmit,
  })

  const onClick = (choice: string) => {
    setChoice(choice)
    setIsShow(true)
  }

  const onConfirm = () => {
    applicant.forEach(async (item) => {
      await data({ uuid: item.uuid })
      dispatch(removeUser(item.uuid))
    })
  }

  return (
    <>
      <S.Positioner>
        <S.Layer>
          <S.RejectBtn onClick={() => onClick('reject')}>불합격</S.RejectBtn>
          <S.AcceptBtn onClick={() => onClick('accept')}>합격</S.AcceptBtn>
        </S.Layer>
      </S.Positioner>
      {isShow && (
        <ConfirmModal
          title={`지원자 ${choice === 'accept' ? '합격' : '불합격'}`}
          description={`정말 ${
            choice === 'accept' ? '합격' : '불합격'
          }시키겠습니까?`}
          onClose={() => setIsShow(false)}
          onConfirm={onConfirm}
        />
      )}
    </>
  )
}
