import { rest } from 'msw'
import serverApi from '@/mocks/handlers/serverApi'

const deleteClub = rest.delete(serverApi('/club/:clubID'), (_req, res, ctx) => {
  return res(
    ctx.json({
      ok: true,
      message: 'sccuess',
    })
  )
})

export default deleteClub
