import { hide } from '@/store/sidebar'
import { useEffect, useState, MouseEvent } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import Content from './Content'
import * as S from './style'

const Sidebar = () => {
  const [isCSR, setIsCSR] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsCSR(true)
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, -parseInt(scrollY))
    }
  }, [])

  if (typeof window === 'undefined' || !isCSR) return <></>

  const portal = document.getElementById('sidebar')
  if (!portal) throw new Error('Not found sidebar')

  const onClick = (e: MouseEvent<HTMLUListElement>) => {
    e.stopPropagation()
  }
  const onClose = () => dispatch(hide())

  return ReactDOM.createPortal(
    <S.Wrapper onClick={onClose}>
      <Content onClick={onClick} />
    </S.Wrapper>,
    portal
  )
}

export default Sidebar
