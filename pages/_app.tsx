import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import InitMocks from '@/mocks'
import wrapper from '@/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

InitMocks()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default wrapper.withRedux(MyApp)
