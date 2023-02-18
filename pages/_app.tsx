import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import InitMocks from '@/mocks'
import store from '@/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'

InitMocks()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ToastContainer />
    </>
  )
}

export default MyApp
