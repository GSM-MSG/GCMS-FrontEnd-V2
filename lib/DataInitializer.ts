import ClubDetailType from '@/type/common/ClubDetailType'
import { EditClubForm } from '@/type/components/ClubEdit'

class DataInitializer {
  static instance: DataInitializer

  constructor() {
    if (DataInitializer.instance) return DataInitializer.instance
    DataInitializer.instance = this
  }

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

const dataInitializer = new DataInitializer()

export default dataInitializer
