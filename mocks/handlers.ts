import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:8080', (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }),
]
