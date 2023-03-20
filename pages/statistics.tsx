import Header from '@/components/Header'
import NotFoundPage from '@/components/NotFoundPage'
import StatisticsPage from '@/components/StatisticsPage'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const clubList = ['FREEDOM', 'EDITORIAL', '']
  const type = contex.query.type?.toString() || ''
  if (clubList.includes(type)) {
    return { props: { ok: true } }
  } else {
    return { props: { ok: false } }
  }
}

interface Props {
  ok: string
}

const Statistics = ({ ok }: Props) => {
  if (!ok) return <NotFoundPage />

  return (
    <>
      <Header />
      <StatisticsPage />
    </>
  )
}

export default Statistics
