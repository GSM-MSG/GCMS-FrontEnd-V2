import serverApi from '@/mocks/handlers/serverApi'
import { rest } from 'msw'

const postRejectApplicant = rest.post(
  serverApi('/applicant/:clubID/reject'),
  async (req, res, ctx) => {
    const data = await req.json()
    console.log(data)
    return res(
      ctx.status(201),
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }
)

export default postRejectApplicant
