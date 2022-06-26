import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
    <Head>
      <title>Jasa Pembuatan Website &amp; Software di Malang, Indonesia</title>
      <meta name="description" content="Kami adalah software house yang menyediakan jasa pembuatan webiste &amp; aplikasi custom di Malang untuk membantu bisnis anda." />
      <meta property="og:title" content="Jasa Pembuatan Website &amp; Software di Malang, Indonesia" />
      <meta property="og:description" content="Kami adalah software house yang menyediakan jasa pembuatan webiste &amp; aplikasi custom di Malang untuk membantu bisnis anda." />
    </Head>
     <Component {...pageProps} />
    </Layout> 
  )
}

export default MyApp
