import serverApi from '@/mocks/handlers/serverApi'
import { ApplicantListType } from '@/type/common'
import { rest } from 'msw'

const data: ApplicantListType = {
  userScope: 'HEAD',
  신청자List: [
    {
      uuid: 'uuid',
      email: 's21031',
      name: '유저이름',
      grade: 1,
      classNum: 2,
      number: 3,
      profileImg: '에베베벱',
    },
    {
      uuid: 'uuid',
      email: 's21031',
      name: '유저이름',
      grade: 1,
      classNum: 2,
      number: 3,
      profileImg: '대충 프로필 이미지 url',
    },
  ],
}

const getApplicantList = rest.get(serverApi('/applicant'), (req, res, ctx) => {
  console.log(req)

  return res(ctx.status(200), ctx.json(data))
})

export default getApplicantList
