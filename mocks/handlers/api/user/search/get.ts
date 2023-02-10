import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'

const getMain = rest.get(serverApi('/user/search'), (_req, res, ctx) => {
  return res(
    ctx.json([
      {
        uuid: 'sdjfksdlfjskf',
        email: 's21025',
        name: '김준',
        grade: 2,
        classNum: 1,
        number: 5,
        profileImg: '',
      },
      {
        uuid: 'sdfsdfsdfsd',
        email: 's21058',
        name: '김성훈',
        grade: 2,
        classNum: 1,
        number: 3,
        profileImg: '',
      },
    ])
  )
})

export default getMain
