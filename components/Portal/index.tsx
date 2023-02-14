import {
  cloneElement,
  useEffect,
  useState,
  MouseEvent,
  ReactElement,
} from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

interface Props {
  children: ReactElement
  onClose?: () => void
}

const Portal = ({ children, onClose }: Props) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = document.getElementById('modal')
  if (!portal) throw new Error('Not found modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <S.Wrapper onClick={onClose}>
      {cloneElement(children, { onClick })}
    </S.Wrapper>,
    portal
  )
}

export default Portal
