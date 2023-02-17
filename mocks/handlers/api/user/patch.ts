import { rest } from 'msw'
import serverApi from '../../serverApi'

const patchProfileImg = rest.patch(
  serverApi('/user'),
  async (_req, res, ctx) => {
    return res(ctx.status(204))
  }
)

export default patchProfileImg
