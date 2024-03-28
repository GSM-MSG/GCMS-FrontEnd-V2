import API from '@/api'
import Header from '@/components/Header'
import MainPage from '@/components/MainPage'
import NotFoundPage from '@/components/NotFoundPage'
import SEO from '@/components/SEO'
import wrapper from '@/store'
import { setClubList } from '@/store/clubList'
import { ClubListType } from '@/type/common'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const clubType = ctx.query?.type
    try {
      const { data } = await API.get<ClubListType[]>(
        `/club?type=${clubType || 'MAJOR'}`
      )
      store.dispatch(setClubList(data))
    } catch (e) {
      return { props: { ok: false } }
    }

    return { props: { ok: true } }
  }
)

interface Props {
  ok: boolean
}

export default function Home({ ok }: Props) {
  // if (!ok) return <NotFoundPage />

  return (
    <>
      <SEO title='GCMS' />
      <Header />
      <MainPage />
    </>
  )
}
