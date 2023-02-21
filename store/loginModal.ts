import { createSlice } from '@reduxjs/toolkit'

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState: false,
  reducers: {
    setModal: (state) => {
      return !state
    },
  },
})
export const { setModal } = loginModalSlice.actions

export default loginModalSlice
