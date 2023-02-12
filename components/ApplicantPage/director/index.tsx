import SelectedUserImg from '../director/SelectedUserImg'
import UserList from '../common/UserList'
import * as S from './style'

export default function Director() {
  return (
    <>
      <SelectedUserImg />
      <S.AllSelectBtn>
        <h5>전부 선택</h5>
      </S.AllSelectBtn>
      <UserList />
    </>
  )
}
