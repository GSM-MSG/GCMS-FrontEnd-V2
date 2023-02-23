import serverApi from '@/mocks/handlers/serverApi'
import { MemberListType } from '@/type/common'
import { rest } from 'msw'

const headData: MemberListType = {
  scope: 'HEAD',
  clubMember: [
    {
      uuid: '12038',
      email: 's21001',
      name: '김유저',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'HEAD',
    },
    {
      uuid: '323432',
      email: 's21002',
      name: '이유저',
      grade: 1,
      classNum: 1,
      number: 2,
      scope: 'MEMBER',
    },
    {
      uuid: '123',
      email: 's21003',
      name: '박유저',
      grade: 1,
      classNum: 2,
      number: 10,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'MEMBER',
    },
    {
      uuid: '4',
      email: 's21004',
      name: '최유저',
      grade: 1,
      classNum: 3,
      number: 12,
      scope: 'MEMBER',
    },
    {
      uuid: '209318939',
      email: 's21001',
      name: '강유저',
      grade: 2,
      classNum: 1,
      number: 2,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'MEMBER',
    },
    {
      uuid: '19283',
      email: 's21002',
      name: '임유저',
      grade: 2,
      classNum: 3,
      number: 18,
      scope: 'MEMBER',
    },
    {
      uuid: '10293',
      email: 's21003',
      name: '제갈유저',
      grade: 3,
      classNum: 2,
      number: 10,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'MEMBER',
    },
    {
      uuid: '314253',
      email: 's21004',
      name: '구유저',
      grade: 3,
      classNum: 3,
      number: 14,
      scope: 'MEMBER',
    },
    {
      uuid: '102912343',
      email: 's21003',
      name: '제갈유저',
      grade: 3,
      classNum: 2,
      number: 10,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'MEMBER',
    },
    {
      uuid: '31443253',
      email: 's21004',
      name: '구유저',
      grade: 3,
      classNum: 3,
      number: 14,
      scope: 'MEMBER',
    },
  ],
}

const memberData: MemberListType = {
  scope: 'MEMBER',
  clubMember: [
    {
      uuid: '12038',
      email: 's21001',
      name: '김유저',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'MEMBER',
    },
    {
      uuid: '323432',
      email: 's21002',
      name: '이유저',
      grade: 1,
      classNum: 1,
      number: 2,
      profileImg: '',
      scope: 'MEMBER',
    },
    {
      uuid: '123',
      email: 's21003',
      name: '박유저',
      grade: 1,
      classNum: 2,
      number: 10,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
      scope: 'MEMBER',
    },
    {
      uuid: '4',
      email: 's21004',
      name: '최유저',
      grade: 1,
      classNum: 3,
      number: 12,
      profileImg: '',
      scope: 'MEMBER',
    },
  ],
}

const getClubMemberList = rest.get(
  serverApi('/club-member/:clubID'),
  (req, res, ctx) => {
    switch (req.params.clubID) {
      case '1':
        return res(ctx.status(200), ctx.json(headData))
      case '2':
        return res(ctx.status(200), ctx.json(memberData))
      default:
        return res(ctx.status(400))
    }
  }
)

export default getClubMemberList
