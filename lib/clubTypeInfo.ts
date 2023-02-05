import ClubTypeInfo from '@/type/lib/clubTypeInfo'

const clubTypeInfo: ClubTypeInfo = [
  {
    title: '전공',
    type: 'MAJOR',
    description: '전공심화를 위한\n활동을 하는 동아리',
    img: '/png/MajorClubHuman.png',
    position: 'bottom',
  },
  {
    title: '자율',
    type: 'FREEDOM',
    description: '같은 관심사를 가진\n학생들이 모인 동아리',
    img: '/png/FreedomClubHuman.png',
    position: 'top',
  },
  {
    title: '사설',
    type: 'EDITORIAL',
    description: '학생들이 교내에서\n자율적으로 만든 동아리',
    img: '/png/EditorialClubHuman.png',
    position: 'center',
  },
]

export default clubTypeInfo
