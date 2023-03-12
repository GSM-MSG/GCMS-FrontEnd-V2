import * as S from './style'
import { useFetch } from '@/hooks'
import { useEffect } from 'react'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import { GraphInfoType } from '@/type/components/Statistics'
import { useRouter } from 'next/router'

interface Props {
  type: ClubOptionType
}

const Statistics = ({ type }: Props) => {
  const router = useRouter()
  const { data, fetch } = useFetch<GraphInfoType>({
    method: 'get',
    url: `/admin/club/statistics?clubType=${type || 'MAJOR'}`,
    errors: {
      403: () => router.push('/'),
    },
  })
  const percent = data ? (data.applicantCount / data.total) * 100 : 0

  useEffect(() => {
    fetch()
  }, [type])

  return (
    <S.Wrapper>
      <S.LeftContent>
        <S.Text>전체 {data?.total}명</S.Text>
        <S.DoughnutGraph applicantPercent={percent}>
          <S.ApplyPersonCount>
            {data?.applicantCount}명 신청함
          </S.ApplyPersonCount>
        </S.DoughnutGraph>
      </S.LeftContent>

      <S.RightContent>
        <S.Text />

        <S.Option>
          <S.Circle color='#4164E1' />
          <S.Text>신청자</S.Text>
        </S.Option>

        <S.Option>
          <S.Circle color='#3D3C3C' />
          <S.Text>비신청자</S.Text>
        </S.Option>
      </S.RightContent>
    </S.Wrapper>
  )
}

export default Statistics
