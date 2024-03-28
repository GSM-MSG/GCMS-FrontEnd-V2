import { checkUrls } from '@/lib/checkUrlList'
import InitMocks from '@/mocks'
import { RootState } from '@/store'
import { setUserProfile } from '@/store/user'
import { UserProfileType } from '@/type/common'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetch from './useFetch'

interface Props {
  onFetch?: boolean
}

const useLoggedIn = ({ onFetch = true }: Props) => {
  const { user } = useSelector((state: RootState) => ({ user: state.user }))
  const dispatch = useDispatch()
  const router = useRouter()
  const checkUrl = checkUrls.includes(router.route)
  const { fetch } = useFetch<UserProfileType>({
    method: 'get',
    url: '/user/profile',
    onSuccess: (data) => {
      dispatch(setUserProfile(data))
    },
    onFailure: () => {
      !checkUrl && router.replace('/')
    },
    autoPushToggle: false,
  })

  useEffect(() => {
    if (user.name || !onFetch) return
    ;(async () => {
      await InitMocks()

      fetch()
    })()
  }, [])

  return { user, isLoggned: !!user.name, fetchUser: fetch }
}

export default useLoggedIn
