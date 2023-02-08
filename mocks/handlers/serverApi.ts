const serverApi = (path: string) =>
  `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`

export default serverApi
