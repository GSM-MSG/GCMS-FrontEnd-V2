import Image from 'next/image'
import { ReactElement, useState, cloneElement } from 'react'
import NoCopyBox from '../Common/NoCopyBox'
import Portal from '../Portal'
import * as S from './style'

interface Props {
  children: ReactElement
  url: string
}

const ImageDetail = ({ children, url }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const onClick = () => {
    setIsShow(!isShow)
  }

  if (isShow)
    return (
      <Portal onClose={onClick}>
        <S.ImageDetailWrapper>
          <NoCopyBox>
            <Image src={url} alt='club activity image' fill sizes='100%' />
          </NoCopyBox>
        </S.ImageDetailWrapper>
      </Portal>
    )

  return cloneElement(children, { onClick })
}

export default ImageDetail
