import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'

const postKickMember = rest.post(
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

export default postKickMember
