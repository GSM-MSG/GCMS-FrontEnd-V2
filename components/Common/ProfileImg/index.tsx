import { ProfileSrc } from '@/lib/ProfileSrc'
import NoCopyImg from '../NoCopyImg'
import Image from 'next/image'

interface Props {
  alt: string
  src?: string
}

const ProfileImg = ({ alt, src }: Props) => {
  return (
    <NoCopyImg>
      <Image
        alt={alt}
        src={src || ProfileSrc}
        fill
        sizes='100%'
        priority={true}
      />
    </NoCopyImg>
  )
}

export default ProfileImg
