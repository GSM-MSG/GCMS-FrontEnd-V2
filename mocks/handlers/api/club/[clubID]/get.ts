import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'
import { data } from './data'

const getClubDetail = rest.get(
  serverApi('/club/:clubID'),
  async (req, res, ctx) => {
    const clubID = req.params.clubID.toString()
    if (!clubID) return res(ctx.status(400))
    return res(ctx.json(data.find((i) => i.id.toString().includes(clubID))))
  }
)

export default getClubDetail
