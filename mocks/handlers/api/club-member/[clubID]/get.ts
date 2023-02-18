import { MemberListType } from '@/type/common'
import { rest } from 'msw'
import serverApi from '../../../serverApi'

const data: MemberListType = {
  scope: 'HEAD',
  clubMember: [
    {
      uuid: '342432',
      email: 's2012',
      name: '이름',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'HEAD',
    },
    {
      uuid: '34224322',
      email: 's2012',
      name: '이르음',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg: '',
      scope: 'HEAD',
    },
    {
      uuid: '342234432',
      email: 's2012',
      name: '이름',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'HEAD',
    },
    {
      uuid: '342244322',
      email: 's2012',
      name: '이르음',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg: '',
      scope: 'HEAD',
    },
  ],
}

const getClubMemberList = rest.get(
  serverApi('/club-member:/clubID'),
  async (req, res, ctx) => {
    if (!req.params.clubID) return res(ctx.status(400))
    return res(ctx.status(200), ctx.json(data))
  }
)

export default getClubMemberList
