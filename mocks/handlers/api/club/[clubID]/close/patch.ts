import { rest } from 'msw'
import serverApi from '@/mocks/handlers/serverApi'

const patchClubClose = rest.patch(
  serverApi('/club/:clubID/close'),
  (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }
)

export default patchClubClose
