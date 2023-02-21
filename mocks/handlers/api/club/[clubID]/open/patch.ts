import { rest } from 'msw'
import serverApi from '@/mocks/handlers/serverApi'

const patchClubOpen = rest.patch(
  serverApi('/club/:clubID/open'),
  (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }
)

export default patchClubOpen
