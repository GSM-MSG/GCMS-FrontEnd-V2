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

export type ClubImgUploadType = 'banner' | 'activity'
