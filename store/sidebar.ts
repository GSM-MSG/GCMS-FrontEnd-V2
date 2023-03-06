import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    hide: () => {
      return false
    },
    show: () => {
      return true
    },
  },
})

export const { hide, show } = sidebarSlice.actions

export default sidebarSlice
