import { rest } from 'msw'

const getMain = rest.get('/', (_req, res, ctx) => {
  return res(
    ctx.json({
      ok: true,
      message: 'sccuess',
    })
  )
})

export default getMain
