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
    handleResizeHeight()
  }, [])

  return (
    <S.Description>
      <h3>소개글</h3>
      <textarea ref={textarea} disabled defaultValue={clubDetail.content} />
    </S.Description>
  )
}
