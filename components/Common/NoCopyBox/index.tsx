import { ReactElement } from 'react'

const NoCopyBox = ({ children }: { children: ReactElement }) => (
  <div onContextMenu={(e) => e.preventDefault()}>{children}</div>
)

export default NoCopyBox
