import { FilePayload, InitialState } from '@/type/store/imgs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  activityImgs: [],
}

const ImgsSlice = createSlice({
  name: 'imgs',
  initialState,
  reducers: {
    setBannerFile: (state, { payload }: PayloadAction<FilePayload>) => {
      const file = payload.file?.item(0)
      if (!file || !file?.type.includes('image')) return

      state.bannerImg = file
      return state
    },

    addActivityFiles: (state, { payload }: PayloadAction<FilePayload>) => {
      if (state.activityImgs.length >= 4) return

      const file = payload.file?.item(0)
      if (!file || !file?.type.includes('image')) return

      state.activityImgs.push(file)
    },

    removeActivityFile: (state, { payload }: PayloadAction<number>) => {
      state.activityImgs = state.activityImgs.filter((_, i) => i !== payload)
    },
  },
})

export const { setBannerFile, addActivityFiles, removeActivityFile } =
  ImgsSlice.actions

export default ImgsSlice
