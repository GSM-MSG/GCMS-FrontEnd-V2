import { InitialState } from '@/type/store/imgs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: InitialState = {
  activityImgs: [],
}

const ImgsSlice = createSlice({
  name: 'imgs',
  initialState,
  reducers: {
    setBannerImg: (state, { payload }: PayloadAction<FileList>) => {
      const file = payload.item(0)
      if (!file || !file?.type.includes('image')) return

      state.bannerImg = file
      return state
    },

    addActivityImgs: (state, { payload }: PayloadAction<FileList>) => {
      if (state.activityImgs.length >= 4) return

      const file = payload.item(0)
      if (!file || !file?.type.includes('image')) return

      state.activityImgs.push(file)
    },

    removeActivityImgs: (state, { payload }: PayloadAction<number>) => {
      state.activityImgs = state.activityImgs.filter((_, i) => i !== payload)
    },
  },
})

export default ImgsSlice
