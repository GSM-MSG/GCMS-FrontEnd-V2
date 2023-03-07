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
    toggle: (state) => {
      return !state
    },
  },
})

export const { hide, show, toggle } = sidebarSlice.actions

export default sidebarSlice
