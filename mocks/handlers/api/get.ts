import { rest } from 'msw'
import serverApi from '../serverApi'

const getMain = rest.get(serverApi('/'), (_req, res, ctx) => {
  return res(
    ctx.json({
      ok: true,
      message: 'sccuess',
    })
  )
})

export default getMain
