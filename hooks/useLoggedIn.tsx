import { checkUrls } from '@/lib/checkUrlList'
import InitMocks from '@/mocks'
import { RootState } from '@/store'
import { setUser } from '@/store/user'
import UserInitialState from '@/type/store/user'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from './useFetch'

const useLoggedIn = () => {
  const { user } = useSelector((state: RootState) => ({ user: state.user }))
  const dispatch = useDispatch()
  const router = useRouter()
  const checkUrl = checkUrls.includes(router.route)
  const { fetch } = useFetch<UserInitialState>({
    method: 'get',
    url: '/user',
    onSuccess: (data) => {
      dispatch(setUser(data))
    },
    onFailure: () => {
      !checkUrl && router.replace('/')
    },
  })

  useEffect(() => {
    if (user.name) return
    ;(async () => {
      await InitMocks()

      fetch()
    })()
  }, [])

  return { user, isLoggned: !!user.name, fetchUser: fetch }
}

export default useLoggedIn
