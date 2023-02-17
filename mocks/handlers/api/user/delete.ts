import { rest } from 'msw'
import serverApi from '../../serverApi'

const deleteUser = rest.delete(serverApi('/auth'), async (_req, res, ctx) => {
  return res(ctx.status(204))
})
export default deleteUser
