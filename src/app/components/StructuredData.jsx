import Head from 'next/head'

const StructuredData = ({data}) => {
  return (
    <Head>
        <script
            key="structured-data"
            type='application/ld+json'
            dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
        />
    </Head>
  )
}

export default StructuredData