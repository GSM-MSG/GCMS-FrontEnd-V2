import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'

const patchDelegateHead = rest.patch(
  serverApi('/club-member/:clubID'),
  async (req, res, ctx) => {
    console.log(await req.json())
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }
)

export default patchDelegateHead
