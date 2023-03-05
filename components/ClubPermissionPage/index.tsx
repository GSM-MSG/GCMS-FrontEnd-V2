import ClubPermissionList from '../Common/ClubPermissionList'
import { ClubObj } from '../Common/ClubPermissionList/ClubObj'
import * as S from './style'

export default function ClubPermissionPage() {
  return (
    <S.Positioner>
      <S.Layer>
        <h3>동아리 허가 요청</h3>
        <ClubPermissionList inputLabel={`총 ${ClubObj.length}명`} />
      </S.Layer>
    </S.Positioner>
  )
}
