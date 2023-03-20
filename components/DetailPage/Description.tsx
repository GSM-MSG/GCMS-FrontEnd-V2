import { RootState } from '@/store'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as S from './style'

export default function Description() {
  const { clubDetail } = useSelector((state: RootState) => ({
    clubDetail: state.clubDetail,
  }))
  const textarea = useRef<HTMLTextAreaElement>(null)

  const handleResizeHeight = () => {
    if (textarea.current)
      textarea.current.style.height = textarea.current.scrollHeight + 'px'
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeHeight)
    return () => {
      window.removeEventListener('resize', handleResizeHeight)
    }
  }, [])

  return (
    <S.Description>
      <h3>소개글</h3>
      <textarea
        ref={textarea}
        rows={1}
        disabled
        defaultValue={clubDetail.content}
      />
    </S.Description>
  )
}
