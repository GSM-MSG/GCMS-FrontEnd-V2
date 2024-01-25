export interface SelectType {
  select: boolean
}

export type ClubImgUploadType = 'banner' | 'activity'

export interface ImgUploadFormType {
  bannerImg: FileList
  activityImgs: FileList
}
