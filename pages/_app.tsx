import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import InitMocks from '@/mocks'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import wrapper from '@/store'

InitMocks()

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
      <ToastContainer />
    </>
  )
}

export default MyApp
