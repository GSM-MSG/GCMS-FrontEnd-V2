import { rest } from 'msw'
import serverApi from '@/mocks/handlers/serverApi'

const patchEditClub = rest.patch(
  serverApi('/club/:clubID'),
  async (req, res, ctx) => {
    const { clubID } = req.params
    const body = await req.json()

    console.log(clubID, body)

    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }
)

export default patchEditClub
