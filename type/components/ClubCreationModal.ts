export interface SelectType {
  select: boolean
}

export interface OptionProps extends SelectType {
  url: string
  position: string
}

export interface ErrorProps {
  error?: boolean
}

export interface ContentFormType {
  content: string
}
