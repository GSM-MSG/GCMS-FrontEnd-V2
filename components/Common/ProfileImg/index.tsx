import { ProfileSrc } from '@/lib/ProfileSrc'
import NoCopyBox from '../NoCopyBox'
import Image from 'next/image'

interface Props {
  alt: string
  src?: string
}

const ProfileImg = ({ alt, src }: Props) => {
  return (
    <NoCopyBox>
      <Image
        alt={alt}
        src={src || ProfileSrc}
        fill
        sizes='100%'
        priority={true}
      />
    </NoCopyBox>
  )
}

export default ProfileImg
