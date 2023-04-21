import { ProfileSrc } from '@/lib/ProfileSrc'
import NoCopyImg from '../NoCopyImg'

interface Props {
  alt: string
  src?: string
}

const ProfileImg = ({ alt, src }: Props) => {
  return (
    <NoCopyImg
      alt={alt}
      src={src || ProfileSrc}
      fill
      sizes='100%'
      priority={true}
    />
  )
}

export default ProfileImg
