import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'

const patchClubPermission = rest.patch(
  serverApi('/admin/:clubID'),
  async (_req, res, ctx) => {
    return res(ctx.status(204))
  }
)

export default patchClubPermission
