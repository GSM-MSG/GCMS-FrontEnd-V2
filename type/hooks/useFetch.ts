export interface ErrorsType {
  [status: number]: string | (() => void)
}
