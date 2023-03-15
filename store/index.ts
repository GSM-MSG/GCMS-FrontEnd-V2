import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit'

import clubCreationSlice from './clubCreation'
import clubCreationPageSlice from './clubCreationPage'
import userSlice from './user'
import applicantSlice from './applicant'
import clubDetailSlice from './clubDetail'
import loginModalSlice from './loginModal'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import reissueSlice from './reissue'
import clubListSlice from './clubList'
import uuidSlice from './uuid'
import sidebarSlice from './sidebar'
import confirmModalSlice from './confirmModal'
import clubDetailApi from './ClubDetailApi'

const NODE_ENV = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers({
  clubCreation: clubCreationSlice.reducer,
  clubCreationPage: clubCreationPageSlice.reducer,
  user: userSlice.reducer,
  applicant: applicantSlice.reducer,
  clubDetail: clubDetailSlice.reducer,
  loginModal: loginModalSlice.reducer,
  reissue: reissueSlice.reducer,
  clubList: clubListSlice.reducer,
  uuid: uuidSlice.reducer,
  sidebar: sidebarSlice.reducer,
  confirmModal: confirmModalSlice.reducer,
  [clubDetailApi.reducerPath]: clubDetailApi.reducer,
})

const reducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload, user: { ...state?.user } }
    default:
      return rootReducer(state, action)
  }
}

const makeStore = () => {
  return configureStore({
    reducer,
    devTools: NODE_ENV,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        clubDetailApi.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export const store = makeStore()

const wrapper = createWrapper(makeStore, { debug: NODE_ENV })
export default wrapper
