import { Method } from 'axios'

export interface ListProps {
  inputLabel?: string
}

export interface SubmitType {
  id: number
  method: Method
}
