import ClubOptionPick from '@/components/ClubOptionPick'
import { ClubOptionType } from '@/type/components/ClubOptionNavigation'
import Icon from '../Icon'
import * as S from './style'
import * as SVG from '@/assets/svg'

interface Props {
  type: ClubOptionType
  onChange: (type: ClubOptionType) => void
}

const FileDownload = ({ type, onChange }: Props) => {
  return (
    <S.Wrapper>
      <ClubOptionPick type={type || undefined} onChange={onChange} />

      <S.Icons>
        <Icon icon={<SVG.ClassBadge />} text='반별 출력' />
        <Icon icon={<SVG.PersonIcon />} text='동아리별 출력' />
      </S.Icons>
    </S.Wrapper>
  )
}

export default FileDownload
