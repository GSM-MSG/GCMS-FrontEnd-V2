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

export interface ImgUploadFormType {
  bannerImg: FileList
  activityImgs: FileList
}

export interface ContentFormType {
  content: string
}

export interface InfoInputsFormDataType {
  name: string
  contact: string
  notionLink: string
  content: string
  teacher?: string
  activityImgs?: FileList
  bannerImg: FileList
}

export type ClubImgUploadType = 'banner' | 'activity'
