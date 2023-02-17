import { ApplicantListType, MemberType } from '../common'
import { ApplicantInitialState } from '../store/applicant'

export interface SelectedProps {
  selected: ApplicantInitialState[]
}

export interface UserListProps {
  data: ApplicantListType | null
  value: string
}

export interface UserItemProps {
  item: MemberType
  userScope: 'HEAD' | 'MEMBER'
}
