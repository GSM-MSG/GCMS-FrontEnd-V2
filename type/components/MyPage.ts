import { Method } from 'axios'

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
  message: string
}
