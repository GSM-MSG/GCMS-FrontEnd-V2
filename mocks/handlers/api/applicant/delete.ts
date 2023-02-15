import { rest } from 'msw'
import serverApi from '../../serverApi'

const deleteClubCancel = rest.delete(
  serverApi('/applicant/:clubID'),
  async (req, res, ctx) => {
    const clubID = req.params.clubID.toString()

    if (!clubID) return res(ctx.status(404))

    return res(ctx.status(200))
  }
)
export default deleteClubCancel
