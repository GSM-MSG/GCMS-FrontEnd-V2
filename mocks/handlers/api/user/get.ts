import { rest } from 'msw'
import serverApi from '../../serverApi'

const getUser = rest.get(serverApi('/user'), (_req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      uuid: 'uuid',
      email: 's21060',
      name: '변찬우',
      grade: 2,
      classNum: 1,
      number: 9,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',

      clubs: [
        {
          id: 1,
          type: 'MAJOR',
          bannerImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',

          name: '테스트',
        },
        {
          id: 2,
          type: 'FREEDOM',
          bannerImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
          name: '테스트2',
        },
        {
          id: 3,
          type: 'FREEDOM',
          bannerImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
          name: '테스트3',
        },
        {
          id: 4,
          type: 'EDITORIAL',
          bannerImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
          name: '테스트4',
        },
      ],
    })
  )
})

export default getUser
