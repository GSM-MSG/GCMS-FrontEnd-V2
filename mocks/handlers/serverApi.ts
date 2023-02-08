const serverApi = (path: string) =>
  new URL(path, process.env.NEXT_PUBLIC_SERVER_URL).toString()

export default serverApi
