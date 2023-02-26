import API from '@/api'
import DetailPage from '@/components/DetailPage'
import Header from '@/components/Header'
import NotFoundPage from '@/components/NotFoundPage'
import { useFetch } from '@/hooks'
import wrapper from '@/store'
import { setClubDetail, setIsApplied, setScope } from '@/store/clubDetail'
import { ClubDetailType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const { data } = await API.get<ClubDetailType>(
        `/club/${ctx.query.clubID}`
      )
      store.dispatch(setClubDetail(data))
    } catch (e) {
      return { props: { ok: false } }
    }

    return { props: { ok: true } }
  }
)

interface Props {
  ok: boolean
}

export default function Detail({ ok }: Props) {
  const router = useRouter()
  const clubId = router.query.clubID
  const dispatch = useDispatch()

  const { fetch } = useFetch<ClubDetailType>({
    method: 'get',
    url: `/club/${clubId}`,
    onSuccess: (data) => {
      dispatch(setScope(data.scope))
      if (data.isApplied) dispatch(setIsApplied())
    },
  })

  useEffect(() => {
    if (ok && clubId) fetch()
  }, [clubId])

  if (!ok) return <NotFoundPage />

  return (
    <>
      <Header />
      <DetailPage />
    </>
  )
}
