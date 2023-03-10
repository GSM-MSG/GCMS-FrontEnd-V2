import Image from 'next/image'

interface Props {
  alt: string
  src?: string
}

const ProfileImg = ({ alt, src }: Props) => {
  return (
    <Image
      alt={alt}
      src={src || '/png/Profile.png'}
      fill
      sizes='100%'
      priority={true}
    />
  )
}

export default ProfileImg
