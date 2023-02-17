import { rest } from 'msw'
import serverApi from '../../serverApi'

const getUser = rest.get(serverApi('/user'), (_req, res, ctx) => {
  return res(ctx.status(500))
  return res(
    ctx.status(200),
    ctx.json({
      uuid: 'uuid',
      email: 's21060',
      name: '변찬우',
      grade: 2,
      classNum: 1,
      number: 9,
      profileImg: '',
      clubs: [
        {
          id: 1,
          type: 'MAJOR',
          bannerImg: '',
          title: '테스트',
        },
        {
          id: 2,
          type: 'FREEDOM',
          bannerUrl: '',
          title: '테스트2',
        },
        {
          id: 3,
          type: 'FREEDOM',
          bannerUrl: '',
          title: '테스트3',
        },
        {
          id: 4,
          type: 'EDITIONAL',
          bannerUrl: '',
          title: '테스트4',
        },
      ],
    })
  )
})

export default getUser
