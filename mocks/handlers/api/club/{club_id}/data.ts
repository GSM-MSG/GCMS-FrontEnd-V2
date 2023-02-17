const activityImgs = [
  'https://blog.kakaocdn.net/dn/bavvFS/btroJ6cYrpS/F7kl5NOx6fzVOWo8DywTx0/img.jpg',
  'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/193/4fb7511e16dd8890d839245cf2cb8320_res.jpeg',
  'https://cdn.inflearn.com/public/files/pages/38c3fb10-72a4-4ea5-8361-4ee6b682e188/SVG.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vZ0wcoogPI87hmGkcd3ot3irr3JsBmRkir0ifNS0mnI2cRnqLft1Iik-sxN72edRFv4&usqp=CAU',
]

const human = {
  uuid: 'uuid',
  email: 's21073',
  name: 'name',
  grade: 1,
  classNum: 2,
  number: 14,
  profileImg:
    'https://static-cdn.jtvnw.net/jtv_user_pictures/e3cc7eb1-babd-4ee2-8be4-107a55c2f987-profile_image-300x300.png',
}

const detailData = {
  bannerImg: 'https://www.computerhope.com/jargon/h/img.png',
  name: '동아리 이름',
  content: 'tjfaud',
  contact: '윤지빈#5193',
  teacher: '선생님이름',
  notionLink: 'https://www.notion.so',
  activityImgs: activityImgs,
  head: human,
  member: [
    human,
    human,
    human,
    human,
    human,
    human,
    human,
    human,
    human,
    human,
  ],
}

export const data = [
  {
    id: 1,
    type: 'MAJOR',
    isOpened: true,
    scope: 'HEAD',
    isApplied: true,
    ...detailData,
  },
  {
    id: 2,
    type: 'EDITORIAL',
    isOpened: true,
    scope: 'MEMBER',
    isApplied: false,
    ...detailData,
  },
  {
    id: 3,
    type: 'FREEDOM',
    isOpened: false,
    scope: 'USER',
    isApplied: true,
    ...detailData,
  },
  {
    id: 4,
    type: 'MAJOR',
    isOpened: false,
    scope: 'HEAD',
    isApplied: false,
    ...detailData,
  },
  {
    id: 5,
    type: 'EDITORIAL',
    isOpened: true,
    scope: 'OTHER',
    isApplied: true,
    ...detailData,
  },
  {
    id: 6,
    type: 'FREEDOM',
    isOpened: true,
    scope: 'HEAD',
    isApplied: false,
    ...detailData,
  },
  {
    id: 7,
    type: 'MAJOR',
    isOpened: false,
    scope: 'MEMBER',
    isApplied: true,
    ...detailData,
  },
  {
    id: 8,
    type: 'EDITORIAL',
    isOpened: true,
    scope: 'USER',
    isApplied: true,
    ...detailData,
  },
  {
    id: 9,
    type: 'FREEDOM',
    isOpened: true,
    scope: 'OTHER',
    isApplied: true,
    ...detailData,
  },
]