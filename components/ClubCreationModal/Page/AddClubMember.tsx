import Input from '../Common/Input'
import Layout from '../Common/Layout'
import Member from '../Common/Member'

const AddClubMember = () => {
  const onSubmit = async () => {
    return
  }

  return (
    <Layout onSubmit={onSubmit} back complete>
      <Input
        label='동아리원'
        placeholder='너, 내 동료가 돼라'
        optional
        description='동아리원은 나중에 다시 선택 혹은 수정이 가능해요.'
      />
    </Layout>
  )
}

export default AddClubMember
