import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'

const data = [
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
]

const getSearchUser = rest.get(serverApi('/user/search'), (req, res, ctx) => {
  const queryName = req.url.searchParams.get('name')
  if (!queryName) return res(ctx.status(400))

  return res(ctx.json(data.filter((i) => i.name.includes(queryName))))
})

export default getSearchUser
