import BannerImg from '../Common/BannerImg'
import ClubImgs from '../Common/ClubImgs'
import Layout from '../Common/Layout'

const ClubImgUpload = () => {
  const onSubmit = () => {
    return
  }

  return (
    <Layout onSubmit={onSubmit} back>
      <BannerImg error />
      <ClubImgs />
    </Layout>
  )
}

export default ClubImgUpload
