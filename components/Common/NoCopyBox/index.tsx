import { ReactElement, MouseEvent, cloneElement } from 'react'

const NoCopyBox = ({ children }: { children: ReactElement }) => {
  const noContextMenu = (e: MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.preventDefault()

  return cloneElement(children, { onContextMenu: noContextMenu })
}

export default NoCopyBox
