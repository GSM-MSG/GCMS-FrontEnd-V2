import { createSlice } from '@reduxjs/toolkit'

const initialState = false

const confirmModalSlice = createSlice({
  name: 'confirmModal',
  initialState,
  reducers: {
    showModal: () => {
      return true
    },
    hideModal: () => {
      return false
    },
    toggleModal: (state) => {
      return !state
    },
  },
})

export const { showModal, hideModal, toggleModal } = confirmModalSlice.actions
export default confirmModalSlice
