import { rest } from 'msw'
import serverApi from '../../serverApi'

const getClubPermission = rest.get(serverApi('/admin'), (_req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        type: 'EDITORIAL',
        name: '더모먼트',
        content: '더모먼트는 정말 정말 정말 개쩌는 동아리에요',
        bannerImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      },
      {
        id: 2,
        type: 'EDITORIAL',
        name: 'MSG',
        content: '더욱 감칠맛 나는 세상을 위해',
        bannerImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      },
      {
        id: 3,
        type: 'MAJOR',
        name: '더모먼트',
        content:
          '더욱 감칠맛이 나는 더모먼트는 정말 정말 정말 개쩌는 동아리에요',
        bannerImg:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      },
    ])
  )
})

export default getClubPermission
