import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { removeUser } from '@/store/applicant'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
  const router = useRouter()
  const { fetch: data } = useFetch({
    url: `/applicant/${router.query.clubID}/${choice}`,
    method: 'post',
    onSuccess: () => {
      onSubmit()
    },
  })

  const onFetch = () => {
    applicant.forEach(async (item) => {
      await data({ uuid: item.uuid })
      dispatch(removeUser(item.uuid))
    })
  }

  useEffect(() => {
    if (choice === '') return
    return onFetch()
  }, [choice])
  return (
    <S.Positioner>
      <S.Layer>
        <S.RejectBtn onClick={() => setChoice('reject')}>불합격</S.RejectBtn>
        <S.AcceptBtn onClick={() => setChoice('accept')}>합격</S.AcceptBtn>
      </S.Layer>
    </S.Positioner>
  )
}
