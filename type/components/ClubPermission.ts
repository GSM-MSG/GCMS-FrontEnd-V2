import { Method } from 'axios'
import { ClubListType } from '../common'

export interface ListProps {
  inputLabel?: string
  data: ClubListType[] | null
  onFetch: () => void
}

export interface SubmitType {
  id: number
  method: Method
}
