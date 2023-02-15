import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import clubCreationSlice from './clubCreation'
import clubCreationPageSlice from './clubCreationPage'
import ImgsSlice from './imgs'
import userSlice from './user'
import applicantSlice from './applicant'

const NODE_ENV = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers({
  clubCreation: clubCreationSlice.reducer,
  clubCreationPage: clubCreationPageSlice.reducer,
  imgs: ImgsSlice.reducer,
  user: userSlice.reducer,
  applicant: applicantSlice.reducer,
})
export type RootState = ReturnType<typeof rootReducer>

const reducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    default:
      return rootReducer(state, action)
  }
}

const makeStore = () => {
  return configureStore({
    reducer,
    devTools: NODE_ENV,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

const wrapper = createWrapper(makeStore, { debug: NODE_ENV })

export const store = makeStore()
export default wrapper
