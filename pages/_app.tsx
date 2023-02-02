import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import InitMocks from '@/mocks'
import wrapper from '@/store'
import { Provider } from 'react-redux'

InitMocks()

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}

export default App
