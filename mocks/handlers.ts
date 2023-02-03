import { rest } from 'msw'

type AuthCodeType = {
  code: string
}

export const handlers = [
  rest.get('http://localhost:8080', (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    )
  }),

  rest.post<AuthCodeType>('http://localhost:8080/auth', (req, res, ctx) => {
    const { code } = req.body
    if (!code) return res(ctx.status(500))
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: code,
        refreshToken: code,
        accessExp: 'yyyy-MM-dd`T`HH:mm:ss',
        refreshExp: 'yyyy-MM-dd`T`HH:mm:ss',
      })
    )
  }),
]
