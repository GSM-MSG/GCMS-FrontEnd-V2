import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

interface Props {
  children: ReactNode
}

const Portal = ({ children }: Props) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = document.getElementById('modal')
  if (!portal) throw new Error('Not found modal')

  return ReactDOM.createPortal(<S.Wrapper>{children}</S.Wrapper>, portal)
}

export default Portal
