import { ReactElement } from 'react'

const NoCopyImg = ({ children }: { children: ReactElement }) => (
  <div onContextMenu={(e) => e.preventDefault()}>{children}</div>
)

export default NoCopyImg
