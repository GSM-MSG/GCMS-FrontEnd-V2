import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:8080', (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }),

  rest.get('/user', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        uuid: 'uuid',
        email: 's21060',
        name: '변찬우',
        grade: 2,
        classNum: 1,
        number: 9,
        profileImg: 'https://',
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
  }),
]
