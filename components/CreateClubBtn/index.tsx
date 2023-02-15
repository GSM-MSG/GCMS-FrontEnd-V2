import useUser from '@/hooks/useUser'
import * as S from './style'

export default function CreateClubBtn() {
  const { isLoggned } = useUser()

  return isLoggned ? <S.Btn /> : <></>
}
