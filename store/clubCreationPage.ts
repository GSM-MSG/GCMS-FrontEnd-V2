import { createSlice } from '@reduxjs/toolkit'

const clubCreationPageSlice = createSlice({
  name: 'clubCreationPage',
  initialState: 1,
  reducers: {
    nextPage: (state) => {
      if (state >= 6) throw new Error('There is no next page')
      return (state += 1)
    },
    backPage: (state) => {
      if (state <= 1) throw new Error('There is no previous page')
      return (state -= 1)
    },
    resetPage: () => {
      return 1
    },
  },
})

export const { nextPage, backPage, resetPage } = clubCreationPageSlice.actions
export default clubCreationPageSlice
