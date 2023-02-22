import API from '@/api'
import DetailPage from '@/components/DetailPage'
import Header from '@/components/Header'
import wrapper from '@/store'
import { setClubDetail } from '@/store/clubDetail'
import { ClubDetailType } from '@/type/common'

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
  if (!ok) return 'falied'
  return (
    <>
      <Header />
      <DetailPage />
    </>
  )
}
