import ClubDetailType from '@/type/common/ClubDetailType'
import { EditClubForm } from '@/type/components/ClubEdit'

class DataInitializer {
  ClubDetailToEditClubForm(data: ClubDetailType): Partial<EditClubForm> {
    return {
      type: data.type,
      name: data.name,
      content: data.content,
      contact: data.contact,
      teacher: data.teacher,
      notionLink: data.notionLink,
      member: [...data.member.map((i) => i.uuid)],
    }
  }
}

export default DataInitializer
