export interface InitialState {
  bannerImg?: File
  activityImgs: File[]
}

export interface FilePayload {
  file: FileList | null
}
