import Head from 'next/head'

interface Props {
  title: string
  description?: string
  url?: string
  image?: string
}

const SEO = ({ title, description, url, image }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='GCMS,gcms,광주소프트웨어마이스터고등학교,동아리,관리,gsm'
      />
      <meta
        name='description'
        content={description ?? 'GSM 동아리 관리 서비스'}
      />

      {/* twitter card */}
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='GCMS - gsm 동아리 관리' />
      <meta
        property='og:description'
        content={description ?? 'GSM 동아리 관리 서비스'}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={url ?? process.env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}
      />
      <meta property='og:image' content={image ?? '/png/CardImage.png'} />

      <meta name='twitter:title' content={title} />
      <meta
        name='twitter:description'
        content={description ?? 'GSM 동아리 관리 서비스'}
      />
      <meta name='twitter:card' content='summary' />
      <meta
        name='twitter:site'
        content={url ?? process.env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}
      />
      <meta name='twitter:image' content={image ?? '/png/CardImage.png'} />
    </Head>
  )
}

export default SEO
