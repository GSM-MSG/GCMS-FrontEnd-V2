import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import { removeUser } from '@/store/applicant'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'

export default function ChoiceUser() {
  const { applicant } = useSelector((state: RootState) => ({
    applicant: state.applicant,
  }))
  const dispatch = useDispatch()
  const [choice, setChoice] = useState('')
  const router = useRouter()
  const { fetch: data, isLoading } = useFetch({
    url: `/applicant/${router.query.clubID}/${choice}`,
    method: 'post',
  })

  const onFetch = () => {
    applicant.filter(async (item) => {
      await data(item.uuid)
      dispatch(removeUser(item.uuid))
    })
  }

  useEffect(() => {
    if (isLoading || choice === '') return
    return onFetch()
  }, [choice, isLoading])
  return (
    <S.Positioner>
      <S.Layer>
        <S.RejectBtn onClick={() => setChoice('reject')}>불합격</S.RejectBtn>
        <S.AcceptBtn onClick={() => setChoice('accept')}>합격</S.AcceptBtn>
      </S.Layer>
    </S.Positioner>
  )
}
