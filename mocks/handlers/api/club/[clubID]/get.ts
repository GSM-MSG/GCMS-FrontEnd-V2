import { rest } from 'msw'
import serverApi from '@/mocks/handlers/serverApi'

const getClubDetail = rest.get(serverApi('/club/:clubID'), (_req, res, ctx) => {
  return res(
    ctx.json({
      id: 1,
      type: 'MAJOR',
      bannerImg: 'https://bit.ly/3EsznxZ',
      name: '동아리 이름',
      content: 'tjfaud',
      contact: '윤지빈#5193',
      teacher: '선생님이름', // optional
      isOpened: true,
      notionLink: 'https://bit.ly/3EsznxZ',
      activityImgs: [
        'https://bit.ly/3EsznxZ',
        'https://bit.ly/3EsznxZ',
        'https://bit.ly/3EsznxZ',
        'https://bit.ly/3EsznxZ',
      ],
      head: {
        uuid: 'uuuid',
        email: 's21073',
        name: 'name',
        grade: 1, // is
        classNum: 2,
        num: 14,
        userImg: 'url', // optional
      },
      member: [
        {
          uuid: 'uuid',
          email: 's21074',
          name: 'name',
          grade: 1,
          classNum: 2,
          num: 14,
          userImg: 'url', // optional
        },
      ],
      scope: 'HEAD',
      isApplied: true,
    })
  )
})

export default getClubDetail
