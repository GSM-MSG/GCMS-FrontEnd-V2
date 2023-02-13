import InitMocks from '@/mocks'
import { RootState } from '@/store'
import { setUser } from '@/store/user'
import { UserInitialState } from '@/type/store/user'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from './useFetch'

const useUser = () => {
  const { user } = useSelector((state: RootState) => ({ user: state.user }))
  const dispatch = useDispatch()
  const { fetch } = useFetch<UserInitialState>({
    method: 'get',
    url: '/user',
    onSuccess: (data) => {
      dispatch(setUser(data))
    },
  })

  useEffect(() => {
    if (user.name) return
    ;(async () => {
      await InitMocks()

      fetch()
    })()
  }, [])

  return { user, isLoggned: !!user.name }
}

export default useUser
