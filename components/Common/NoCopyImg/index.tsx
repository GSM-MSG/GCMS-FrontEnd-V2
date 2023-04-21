import Image, { ImageProps } from 'next/image'

const NoCopyImg = (props: ImageProps) => (
  <Image {...props} onContextMenu={(e) => e.preventDefault()} />
)

export default NoCopyImg
