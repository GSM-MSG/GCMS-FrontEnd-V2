import Switch from '@/components/Common/Switch'
import { useFetch } from '@/hooks'
import { RootState } from '@/store'
import ScopeType from '@/type/common/ScopeType'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  clubId?: number
  opened?: boolean
  scope?: ScopeType
}

const SwitchBtn = ({ clubId, opened, scope }: Props) => {
  const { user } = useSelector((state: RootState) => ({ ...state }))
  const [isOpened, setIsOpened] = useState<boolean | undefined>(opened)
  const { fetch, isLoading } = useFetch({
    method: 'patch',
    url: `/club/${clubId}/${isOpened ? 'close' : 'open'}`,
    errors: '동아리 열기/닫기에 실패했습니다',
    onSuccess: () => {
      setIsOpened(!isOpened)
    },
  })

  const onClick = () => {
    !isLoading && fetch()
  }

  useEffect(() => {
    setIsOpened(opened)
  }, [opened])

  return (
    <Switch
      toggle={!!isOpened}
      onClick={onClick}
      disabled={!(scope === 'HEAD' || user.role === 'ROLE_ADMIN')}
    />
  )
}

export default SwitchBtn
