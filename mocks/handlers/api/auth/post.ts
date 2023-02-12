import { rest } from 'msw'
import serverApi from '../../serverApi'

const postLogin = rest.post(serverApi('/auth'), async (req, res, ctx) => {
  const data = await req.json()
  if (!data.code) return res(ctx.status(500))
  return res(
    ctx.status(200),
    ctx.json({
      accessToken: data.code,
      refreshToken: data.code,
      accessExp: 'yyyy-MM-ddTHH:mm:ss',
      refreshExp: 'yyyy-MM-ddTHH:mm:ss',
    })
  )
})
export default postLogin
