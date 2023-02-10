import { useForm } from 'react-hook-form'
import Layout from '../Common/Layout'
import TextareaInput from '../Common/Textarea'

const ClubContent = () => {
  const {} = useForm()
  const onSubmit = async () => {
    return
  }

  return (
    <Layout onSubmit={onSubmit} back>
      <TextareaInput />
    </Layout>
  )
}

export default ClubContent
