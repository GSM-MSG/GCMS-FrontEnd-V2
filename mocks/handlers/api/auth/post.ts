import { rest } from 'msw'
import serverApi from '../../serverApi'

const postLogin = rest.post(serverApi('/auth'), async (req, res, ctx) => {
  const data = await req.json()
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
