import serverApi from '@/mocks/handlers/serverApi'
import { ApplicantListType } from '@/type/common'
import { rest } from 'msw'

const headData: ApplicantListType = {
  scope: 'HEAD',
  applicantList: [
    {
      uuid: '12038',
      email: 's21001',
      name: '김유저',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
    },
    {
      uuid: '323432',
      email: 's21002',
      name: '이유저',
      grade: 1,
      classNum: 1,
      number: 2,
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
    },
    {
      uuid: '4',
      email: 's21004',
      name: '최유저',
      grade: 1,
      classNum: 3,
      number: 12,
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
    },
    {
      uuid: '19283',
      email: 's21002',
      name: '임유저',
      grade: 2,
      classNum: 3,
      number: 18,
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
    },
    {
      uuid: '314253',
      email: 's21004',
      name: '구유저',
      grade: 3,
      classNum: 3,
      number: 14,
    },
  ],
}

const memberData: ApplicantListType = {
  scope: 'MEMBER',
  applicantList: [
    {
      uuid: '12038',
      email: 's21001',
      name: '김유저',
      grade: 1,
      classNum: 1,
      number: 1,
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZ2tjhm-hB80ErkhPt0zxaYo6iKW0tsKPdQ&usqp=CAU',
    },
    {
      uuid: '323432',
      email: 's21002',
      name: '이유저',
      grade: 1,
      classNum: 1,
      number: 2,
      profileImg: '',
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
    },
    {
      uuid: '4',
      email: 's21004',
      name: '최유저',
      grade: 1,
      classNum: 3,
      number: 12,
      profileImg: '',
    },
  ],
}

const getApplicantList = rest.get(
  serverApi('/applicant/:clubID'),
  (req, res, ctx) => {
    // console.log(req.params.clubID)
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

export default getApplicantList
