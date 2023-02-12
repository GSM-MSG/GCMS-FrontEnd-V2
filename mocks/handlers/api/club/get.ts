import { rest } from 'msw'
import serverApi from '../../serverApi'

const data = [
  {
    id: 1,
    type: 'MAJOR',
    name: 'title',
    content: '뷁',
    bannerImg: 'https://www.computerhope.com/jargon/h/img.png',
  },
  {
    id: 2,
    type: 'EDITORIAL',
    name: 'title',
    content: '뷁뷁',
    bannerImg: '',
  },
  {
    id: 3,
    type: 'FREEDOM',
    name: 'title',
    content: '뷁뷁뷁',
    bannerImg: 'https://www.computerhope.com/jargon/h/img.png',
  },
]

const getClubList = rest.get(serverApi('/club'), async (req, res, ctx) => {
  const queryName = req.url.searchParams.get('type')
  if (!queryName) return res(ctx.status(400))
  return res(ctx.json(data.filter((i) => i.type.includes(queryName))))
})

export default getClubList
