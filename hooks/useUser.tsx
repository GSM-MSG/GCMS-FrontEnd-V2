import InitMocks from '@/mocks'
import { RootState } from '@/store'
import { setUser } from '@/store/user'
import { UserInitialState } from '@/type/store/user'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from './useFetch'

const useUser = () => {
  const { user } = useSelector((state: RootState) => ({ user: state.user }))
  const dispatch = useDispatch()
  const router = useRouter()
  const { fetch } = useFetch<UserInitialState>({
    method: 'get',
    url: '/user',
    onSuccess: (data) => {
      dispatch(setUser(data))
    },
    onFailure: () => {
      if (router.route !== '/') return
      router.replace('/')
    },
    errors: { 401: '로그인을 해 주세요', 404: '로그인을 해 주세요' },
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
