import { ApplicantListType, MemberType, ScopeType } from '../common'
import AttendListType from '../common/AttendListType'
import AttendMemberType from '../common/AttendMemberType'
import clubMemberListType from '../common/clubMemberListType'
import { ApplicantInitialState } from '../store/applicant'

export interface SelectedProps {
  selected: ApplicantInitialState[]
}

export interface UserListProps {
  data: AttendListType | null;
  value: string
}

export interface UserItemProps {
  item: AttendMemberType
}
