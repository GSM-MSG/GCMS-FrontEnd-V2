import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import InitMocks from '@/mocks'

InitMocks()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
