import ClubOptionPick from '@/components/ClubOptionPick'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import Icon from '../Icon'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useDownload } from '@/hooks'
import RequestClubType from '@/lib/requestClubType'
import { useRouter } from 'next/router'

interface Props {
  type: ClubOptionType
}

const FileDownload = ({ type }: Props) => {
  const router = useRouter()

  const clubTypeKorean = RequestClubType(type || 'MAJOR')
  const { fetch: clubDownload } = useDownload({
    method: 'get',
    url: `/admin/excel/club?clubType=${type || 'MAJOR'}`,
    fileName: `${clubTypeKorean}_동아리별_출력`,
    fileType: 'xlsx',
  })

  const { fetch: classDownload } = useDownload({
    method: 'get',
    url: `/admin/excel/club/grade?clubType=${type || 'MAJOR'}`,
    fileName: `${clubTypeKorean}_반별_출력`,
    fileType: 'xlsx',
  })

  const onChange = (type: ClubOptionType) => {
    router.push({
      pathname: '/statistics',
      query: type && { type },
    })
  }

  return (
    <S.Wrapper>
      <ClubOptionPick type={type || undefined} onChange={onChange} />

      <S.Icons>
        <Icon
          onClick={classDownload}
          icon={<SVG.ClassBadge />}
          text='반별 출력'
        />
        <Icon
          onClick={clubDownload}
          icon={<SVG.Human />}
          text='동아리별 출력'
        />
      </S.Icons>
    </S.Wrapper>
  )
}

export default FileDownload
