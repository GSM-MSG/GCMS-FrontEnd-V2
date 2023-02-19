import Head from 'next/head'

interface Props {
  title: string
  description: string
  url: string
  image: string
}

const SEO = ({ title, description, url, image }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='GCMS,gcms,광주소프트웨어마이스터고등학교,동아리,관리,gsm'
      />

      {/* twitter card */}
      <meta name='og:title' content={title} />
      <meta name='og:site_name' content='GCMS - gsm 동아리 관리' />
      <meta name='og:description' content={description} />
      <meta name='og:type' content='website' />
      <meta name='og:url' content={url} />
      <meta property='og:image' content={image} />

      <meta name='twitter:title' content={title} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={url} />
      <meta name='twitter:image' content={image} />
      <meta property='twitter:description' content={description} />
    </Head>
  )
}

export default SEO
