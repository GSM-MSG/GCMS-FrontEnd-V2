import ClubOptionPick from '@/components/ClubOptionPick'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import Icon from '../Icon'
import * as S from './style'
import * as SVG from '@/assets/svg'
import { useExcelDownload } from '@/hooks'
import RequestClubType from '@/lib/requestClubType'

interface Props {
  type: ClubOptionType
  onChange: (type: ClubOptionType) => void
}

const FileDownload = ({ type, onChange }: Props) => {
  const clubTypeKorean = RequestClubType(type || 'MAJOR')
  const { download: clubDownload } = useExcelDownload({
    method: 'get',
    url: `/admin/excel/club?clubType=${type || 'MAJOR'}`,
    fileName: `${clubTypeKorean}/동아리별 출력`,
  })

  const { download: classDownload } = useExcelDownload({
    method: 'get',
    url: `/admin/excel/club/grade?clubType=${type || 'MAJOR'}`,
    fileName: `${clubTypeKorean}/동아리별 출력`,
  })

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
          icon={<SVG.PersonIcon />}
          text='동아리별 출력'
        />
      </S.Icons>
    </S.Wrapper>
  )
}

export default FileDownload
