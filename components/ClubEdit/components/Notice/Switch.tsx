import { useFetch } from '@/hooks'
import ScopeType from '@/type/common/ScopeType'
import { useEffect, useState } from 'react'
import * as S from './style'

interface Props {
  clubId?: number
  opened?: boolean
  scope?: ScopeType
}

const Switch = ({ clubId, opened, scope }: Props) => {
  const [isOpened, setIsOpened] = useState<boolean | undefined>(opened)
  const { fetch, isLoading } = useFetch({
    method: 'patch',
    url: `/club/${clubId}/${isOpened ? 'close' : 'open'}`,
    onSuccess: () => {
      setIsOpened(!isOpened)
    },
  })

  const onClick = () => {
    if (isLoading) return
    fetch()
  }

  useEffect(() => {
    setIsOpened(opened)
  }, [opened])

  return (
    <>
      <S.SwitchInput
        id='switch'
        checked={!!isOpened}
        readOnly
        type='checkbox'
        disabled={scope !== 'HEAD'}
        onClick={onClick}
      />
      <S.Switch htmlFor='switch'>
        <span>off</span>
        <S.SwitchBtn />
        <span>on</span>
      </S.Switch>
    </>
  )
}

export default Switch
