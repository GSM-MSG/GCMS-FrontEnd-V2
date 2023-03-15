import { Method } from 'axios'
import { ClubType, ProfileType } from '../common'

export interface ApiType {
  url: string
  method: Method
  onSuccess?: () => void | Promise<void>
  onFailure?: () => void | Promise<void>
  data?: { [key: string]: any }
}

export interface OnDeleteType {
  url: string
  method: Method
  title: string
  message: string
}

export interface ClubItemType {
  clubType: ClubType
  data: ProfileType | null
}
