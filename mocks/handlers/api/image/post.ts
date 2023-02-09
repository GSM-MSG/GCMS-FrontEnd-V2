import { rest } from 'msw'
import serverApi from '../../serverApi'

const postImgUpload = rest.post(serverApi('/image'), (_req, res, ctx) => {
  return res(
    ctx.json({
      images: [...Array(5)].map(
        () =>
          'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png'
      ),
    })
  )
})

export default postImgUpload
