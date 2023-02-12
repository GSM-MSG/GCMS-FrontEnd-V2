import { rest } from 'msw'
import serverApi from '../../serverApi'

const postAddClub = rest.post(serverApi('/club'), async (req, res, ctx) => {
  const data = await req.json()
  console.log(data)
  return res(
    ctx.json({
      ok: true,
      message: 'sccuess',
    })
  )
})

export default postAddClub
