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
  {
    uuid: 'sdjf',
    email: 's21025',
    name: '김김김',
    grade: 2,
    classNum: 1,
    number: 5,
    profileImg: '',
  },
  {
    uuid: 'sdjfksdlfskdfjskdjfskf',
    email: 's21025',
    name: '김먹고싶다',
    grade: 2,
    classNum: 1,
    number: 5,
    profileImg: '',
  },
  {
    uuid: 'sdjfksdlfskdfjsksdkdskjdjfskf',
    email: 's21025',
    name: '김밥이 가장 좋더라',
    grade: 2,
    classNum: 1,
    number: 5,
    profileImg: '',
  },
  {
    uuid: 'sdjfksdsdfslfskdfjsksdkdskjdjfsksf',
    email: 's21025',
    name: '김밥나라',
    grade: 2,
    classNum: 1,
    number: 5,
    profileImg: '',
  },
  {
    uuid: 'sdjfksjdjfsksf',
    email: 's21025',
    name: '김밥천국',
    grade: 2,
    classNum: 1,
    number: 5,
    profileImg: '',
  },
  {
    uuid: 'sdsdjsjjfksjdjfsksf',
    email: 's21025',
    name: '김밥지옥',
    grade: 2,
    classNum: 1,
    number: 5,
    profileImg: '',
  },
]

const getSearchUser = rest.get(serverApi('/user/search'), (req, res, ctx) => {
  const queryName = req.url.searchParams.get('name')
  if (!queryName) return res(ctx.status(400))

  return res(ctx.json(data.filter((i) => i.name.includes(queryName))))
})

export default getSearchUser
