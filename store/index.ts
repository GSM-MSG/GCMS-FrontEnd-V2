import { configureStore } from '@reduxjs/toolkit'

import clubCreationSlice from './clubCreation'
import clubCreationPageSlice from './clubCreationPage'
import ImgsSlice from './imgs'
import userSlice from './user'
import applicantSlice from './applicant'
import clubDetailSlice from './clubDetail'

const NODE_ENV = process.env.NODE_ENV === 'development'

const store = configureStore({
  reducer: {
    clubCreation: clubCreationSlice.reducer,
    clubCreationPage: clubCreationPageSlice.reducer,
    imgs: ImgsSlice.reducer,
    user: userSlice.reducer,
    applicant: applicantSlice.reducer,
    clubDetail: clubDetailSlice.reducer,
  },
  devTools: NODE_ENV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>

export default store
