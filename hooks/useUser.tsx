import InitMocks from '@/mocks'
import { RootState } from '@/store'
import { setUser } from '@/store/user'
import UserType from '@/type/store/userType'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from './useFetch'

const useUser = () => {
  const { user } = useSelector((state: RootState) => ({ user: state.user }))
  const dispatch = useDispatch()
  const router = useRouter()
  const { fetch } = useFetch<UserType>({
    method: 'get',
    url: '/user',
    onSuccess: (data) => {
      dispatch(setUser(data))
    },
    onFailure: () => {
      router.route !== '/' && router.replace('/')
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

export default useUser
