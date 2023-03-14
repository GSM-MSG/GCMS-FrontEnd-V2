import { ProfileSrc } from '@/lib/ProfileSrc'
import Image from 'next/image'

interface Props {
  alt: string
  src?: string
}

const ProfileImg = ({ alt, src }: Props) => {
  return (
    <Image
      alt={alt}
      src={src || ProfileSrc}
      fill
      sizes='100%'
      priority={true}
    />
  )
}

export default ProfileImg
