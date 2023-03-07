import { ClubType } from '@/type/common'

const RequestClubType = (type: ClubType) => {
  switch (type) {
    case 'MAJOR':
      return '전공 동아리'
    case 'FREEDOM':
      return '자율 동아리'
    case 'EDITORIAL':
      return '사설 동아리'
  }
}

export default RequestClubType
